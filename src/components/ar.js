/* globals AFRAME */

import React, { useEffect, useState } from 'react';
import markers from '../data/markers.json';
import waitForGlobal from '../utils/waitForGlobal';

import Marker from './marker';
import Overlay from './overlay';
import LoadingSpinner from './loading-spinner';
import Video from './video';
import Focus from './focus';

import arStyles from './ar.module.scss';
import '../../node_modules/video-react/dist/video-react.css';

const timeout = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

const moveVideo = () => {
  const video = document.getElementById('arjs-video');
  const aScene = document.getElementById('a-scene');
  aScene.after(video);
  console.log('moved video');
};

const registerMarkerComponents = async (setShowMarker, setCurrentVideoName) => {
  // await timeout(1000);

  AFRAME.registerComponent('marker', {
    schema: {
      videoName: { type: 'string', default: 'the-fabricant-overlay' },
    },

    init: function () {
      const marker = this.el;
      const videoName = this.data.videoName;
      console.log('videoName: ', videoName);

      marker.addEventListener('markerFound', () => {
        console.log('Marker found', videoName);
        setCurrentVideoName(videoName);
      });

      marker.addEventListener('markerLost', () => {
        setCurrentVideoName(null);
      });
    },
  });

  setShowMarker(true);
};

const Ar = () => {
  const [showScene, setShowScene] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const [currentVideoName, setCurrentVideoName] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    setVideoSrc(
      currentVideoName
        ? `https://litc0de.github.io/ar-slanted/videos/${currentVideoName}`
        : null
    );
  }, [currentVideoName]);

  useEffect(() => {
    window.addEventListener('arjs-video-loaded', moveVideo);
    waitForGlobal('AFRAME').then(() => {
      setShowScene(true);
    });
  }, []);

  useEffect(() => {
    showScene && registerMarkerComponents(setShowMarker, setCurrentVideoName);
  }, [showScene]);

  return (
    <>
      <div className="arjs-loader">
        <Overlay>
          <LoadingSpinner />
        </Overlay>
      </div>

      {showScene && (
        <a-scene
          id="a-scene"
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          {showMarker &&
            markers.map((marker) => (
              <Marker
                name={marker.name}
                markerName={marker.markerName}
                videoName={marker.videoName}
                key={marker.markerName}
              />
            ))}
          <a-entity camera></a-entity>
        </a-scene>
      )}

      <Overlay>
        {videoSrc && <Video src={videoSrc} />}
        {!videoSrc && <Focus />}
      </Overlay>
    </>
  );
};

export default Ar;
