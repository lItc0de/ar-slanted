/* globals ARController, ARCameraParam */

import React, { useEffect, useState, createRef } from 'react';
import waitForGlobal from '../utils/waitForGlobal';

// import { ARControllerNFT } from '@kalwalt/jsartoolkit-nft';
import markers from '../data/markers.json';

const process = (context_process, video, arController) => {
  context_process.drawImage(video.current, 0, 0, 640, 480);
  const imageData = context_process.getImageData(0, 0, 640, 480);

  arController.process(imageData);
  requestAnimationFrame(() => process(context_process, video, arController));
};

// const tick = (arController, video) => {
//   process(arController, video);
//   // draw();
//   requestAnimationFrame(() => tick(arController, video));
// };

const startProcessing = (video, arController) => {
  const canvas_process = document.createElement('canvas');
  const context_process = canvas_process.getContext('2d');

  context_process.fillStyle = 'black';
  context_process.fillRect(0, 0, 640, 480);

  process(context_process, video, arController);
};

// const process = () => {
//   markerResult = null

//   if (ar && ar.process) {
//     ar.process(next)
//   }

//   if (markerResult) {
//     postMessage(markerResult)
//   } else {
//     postMessage({ type: 'not found' })
//   }

//   next = null
// }

const onLoad = async (arController) => {
  const ar = arController;

  ar.addEventListener('getNFTMarker', (ev) => {
    console.log('marker Found', ev.data);
  });

  await loadNFTMarker(ar, markers[0].markerName);

  console.log('1. loaded');

  await loadNFTMarker(ar, markers[1].markerName);

  console.log('2. loaded');

  // for (const marker of markers) {
  //   await loadNFTMarker(ar, marker.markerName);
  // }

  // await Promise.all(markers.map((marker) => loadNFTMarker(ar, marker.markerName)));
};

const onComplete = (arController, video) => {
  startProcessing(video, arController);
};

const loadNFTMarker = (ar, markerName) => new Promise((resolve, reject) => {
  ar.loadNFTMarker(`markers/${markerName}`, (marker) => {
    ar.trackNFTMarkerId(marker.id);
    console.log('loadNFTMarker -> ', marker.id);
    console.log(marker);
    resolve(marker);
  });
});

// const initAr = async (arController, setMarkerMap) => {
//   const markerIndex = 0;
//   const markerId = await loadNFTMarker(
//     arController,
//     markers[markerIndex].markerName
//   );
//   setMarkerMap((map) => ({ ...map, [markerId]: markerIndex }));
// };

const ArToolkit = () => {
  // const [arController, setArController] = useState(null);
  // const [markerMap, setMarkerMap] = useState({});
  const [video] = useState(createRef());

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

    const param = new ARCameraParam('data/camera_para.dat');
    param.onload = async () => {
      const arController = new ARController(640, 480, param);
      arController.setLogLevel(0);
      await onLoad(arController);
      onComplete(arController, video);
    }
  };

  const videoError = (error) => {
    console.log('error', error);
  };

  const initVideo = () => {
    navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia ||
        navigator.oGetUserMedia;
      if (navigator.getUserMedia) {
        navigator.getUserMedia(constraints, handleVideo, videoError);
      }
  }

  useEffect(() => {
    waitForGlobal('ARController').then(initVideo);
  }, [])

  return <video ref={video} autoPlay></video>;
};

export default ArToolkit;
