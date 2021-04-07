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

const timeout = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const moveVideo = () => {
  const video = document.getElementById('arjs-video');
  const aScene = document.getElementById('a-scene');
  aScene.after(video);
  console.log('moved video');
};

const registerMarkerComponents = async (setShowMarker, setCurrentMarker) => {
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
        const currentMarker = markers.find(
          (marker) => marker.videoName === videoName
        );
        setCurrentMarker(currentMarker);
      });

      marker.addEventListener('markerLost', () => {
        setCurrentMarker(null);
      });
    },
  });

  setShowMarker(true);
};

const Ar = () => {
  const [showScene, setShowScene] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const [currentMarker, setCurrentMarker] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    setVideoSrc(
      currentMarker
        ? `https://litc0de.github.io/ar-slanted/videos/${currentMarker.videoName}`
        : null
    );
  }, [currentMarker]);

  useEffect(() => {
    window.addEventListener('arjs-video-loaded', moveVideo);
    waitForGlobal('AFRAME').then(() => {
      setShowScene(true);
    });
  }, []);

  useEffect(() => {
    showScene && registerMarkerComponents(setShowMarker, setCurrentMarker);
  }, [showScene]);

  const handleVideoClose = () => {
    setCurrentMarker(null);
  };

  const setMarker = () => {
    setCurrentMarker(markers.find((marker) => marker.videoName === 'The_Digitalls.mp4'));
  }

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

      <Overlay grey={!!currentMarker}>
        {currentMarker && (
          <Video
            src={videoSrc}
            handleVideoClose={handleVideoClose}
            description={currentMarker.videoDescription}
            author={currentMarker.author}
          />
        )}
        {!currentMarker && <Focus />}
        {false && !currentMarker && <button type="button" onClick={setMarker}>Show video</button>}
      </Overlay>
    </>
  );
};

export default Ar;
