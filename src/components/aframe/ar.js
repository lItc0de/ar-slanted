import React, { useEffect, useRef, useState } from 'react';
import { ARToolkitNFT, ARControllerNFT } from '@kalwalt/jsartoolkit-nft';

import markers from '../../data/markers.json';

const handleError = (error) => {
  console.log('error', error);
};

const initVideo = (constraints, handleVideo, handleError) => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia(constraints, handleVideo, handleError);
  }
};

const initArToolkit = async () => {
  const { width, height } = getDimensions();
  console.log({ width, height });
  const controllers = []

  await markers.reduce(async (prev, marker) => {
    await prev;

    const ar = await ARControllerNFT.initWithDimensions(
      width,
      height,
      'data/camera_para.dat'
    );

    ar.addEventListener('getNFTMarker', (ev) => {
      console.log('marker found:', ev.data.marker.id);
    });


    const markerUrl = `https://downloads.slanted.de/Slanted-Magazine/AI/${marker.markerName}`;
    const nftMarker = await ar.loadNFTMarker(markerUrl);
    console.log('markerID:', nftMarker.id);
    await ar.trackNFTMarkerId(nftMarker.id, nftMarker.width);

    controllers.push(ar);
  }, undefined);

  console.log(controllers);

  // const controllers = await Promise.all(markers.map(async (marker) => {
  //   const ar = await ARControllerNFT.initWithDimensions(
  //     width,
  //     height,
  //     'data/camera_para.dat'
  //   );

  //   ar.addEventListener('getNFTMarker', (ev) => {
  //     console.log('marker found:', ev.data.marker.id);
  //   });


  //   // const markerUrl = `https://downloads.slanted.de/Slanted-Magazine/AI/${marker.markerName}`;
  //   // const nftMarker = await ar.loadNFTMarker(markerUrl);
  //   // console.log('markerID:', nftMarker.id);
  //   // await ar.trackNFTMarkerId(nftMarker.id, nftMarker.width);
  //   return ar;
  // }));

  return controllers;
};

const getDimensions = () => {
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  return { width: 640, height: 480 };
};

const startProcess = (controllers, video, canvas) => {
  const { width, height } = getDimensions();
  // const canvas_process = document.createElement('canvas');
  const context_process = canvas.current.getContext('2d');

  const process = () => {
    console.log('process called');
    context_process.fillStyle = 'black';
    context_process.fillRect(0, 0, width, height);
    context_process.drawImage(video.current, 0, 0, width, height);
    const imageData = context_process.getImageData(0, 0, width, height);
    controllers[0].process(imageData);
    // controllers.forEach((ar) => {
    //   console.log('controller:', ar);
    //   ar.process(imageData);
    // });
    setTimeout(process, 1000);
  };

  process();
};

const Ar = () => {
  const video = useRef(null);
  const canvas = useRef(null);

  const constraints = {
    audio: false,
    video: {
      //facingMode: "environment",
      facingMode: 'user',
      width: 640,
      height: 480,
      frameRate: { max: 30 },
    },
  };

  const handleVideo = async (stream) => {
    video.current.srcObject = stream;
    // video.play();
    const controllers = await initArToolkit();
    startProcess(controllers, video, canvas);
  };

  useEffect(() => {
    const { width, height } = getDimensions();
    constraints.width = width;
    constraints.height = height;
    initVideo(constraints, handleVideo, handleError);
  }, []);

  return (
    <>
      <video ref={video} loop autoPlay muted playsInline id="video"></video>
      <canvas ref={canvas} width="640" height="480"/>
    </>
  );
};

export default Ar;
