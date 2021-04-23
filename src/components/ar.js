/* globals AFRAME */

import React, { useEffect, useState } from 'react';
import markers from '../data/markers.json';
import waitForGlobal from '../utils/waitForGlobal';

import Marker from './marker';
import Overlay from './overlay';
import LoadingSpinner from './loading-spinner';
import Video from './video';
import Focus from './focus';

import * as arStyles from './ar.module.scss';
import '../../node_modules/video-react/dist/video-react.css';

const timeout = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const moveVideo = () => {
  const video = document.getElementById('arjs-video');
  const aScene = document.getElementById('a-scene');
  aScene.after(video);
  console.log('moved video');
};

const registerMarkerComponents = async (setShowMarkers, setCurrentMarkerName) => {
  // await timeout(1000);

  AFRAME.registerComponent('marker', {
    schema: {
      markerName: { type: 'string', default: 'the-fabricant-overlay' },
    },

    init: function () {
      const marker = this.el;
      const { markerName } = this.data;

      marker.addEventListener('markerFound', () => {
        console.log('Marker found', markerName);
        setCurrentMarkerName(markerName);
      });

      marker.addEventListener('markerLost', () => {
        console.log('Marker lost', markerName);
        // setCurrentMarkerName(null);
      });
    },
  });

  setShowMarkers(true);
};

const Ar = () => {
  const [showScene, setShowScene] = useState(false);
  const [showMarkers, setShowMarkers] = useState(false);
  const [currentMarkerName, setCurrentMarkerName] = useState(null);
  const [currentMarker, setCurrentMarker] = useState(null);

  useEffect(() => {
    const marker = markers.find((marker) => marker.markerName === currentMarkerName);
    setCurrentMarker(marker || null);
  }, [currentMarkerName]);

  useEffect(() => {
    window.addEventListener('arjs-video-loaded', moveVideo);
    waitForGlobal('AFRAME').then(() => {
      setShowScene(true);
    });
  }, []);

  useEffect(() => {
    showScene && registerMarkerComponents(setShowMarkers, setCurrentMarkerName);
  }, [showScene]);

  const handleVideoClose = () => {
    setCurrentMarkerName(null);
  };

  const setMarker = () => {
    setCurrentMarkerName('The_Digitalls');
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
          {showMarkers &&
            markers.map((marker) => (
              <Marker
                markerName={marker.markerName}
                key={marker.markerName}
              />
            ))}
          <a-entity camera></a-entity>
        </a-scene>
      )}

      <Overlay grey={!!currentMarker}>
        {currentMarker && (
          <Video
            videoName={currentMarker.videoName}
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
