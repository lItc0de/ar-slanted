/* globals AFRAME */

import React, { useEffect, useState } from 'react';
import waitForGlobal from '../utils/waitForGlobal';
import Overlay from '../components/overlay';
import LoadingSpinner from '../components/loading-spinner';

import Marker from './marker';

// const timeout = (time) =>
//   new Promise((resolve) => setTimeout(() => resolve(), time));

const moveVideo = () => {
  const video = document.getElementById('arjs-video');
  const aScene = document.getElementById('a-scene');
  aScene.after(video);
  console.log('moved video');
};

const registerMarkerComponents = async (setShowMarkers, handleMarkerFound) => {
  // await timeout(1000);
  console.log('register marker components');

  AFRAME.registerComponent('marker', {
    schema: {
      markerName: { type: 'string', default: 'the-fabricant-overlay' },
    },

    init: function () {
      const marker = this.el;
      const { markerName } = this.data;

      marker.addEventListener('markerFound', () => {
        console.log('Marker found', markerName);
        handleMarkerFound(markerName);
      });
    },
  });

  setShowMarkers(true);
};

const Ar = (props) => {
  const [showScene, setShowScene] = useState(false);
  const [showMarkers, setShowMarkers] = useState(false);

  useEffect(() => {
    window.addEventListener('arjs-video-loaded', moveVideo);
    waitForGlobal('AFRAME').then(() => {
      setShowScene(true);
    });
  }, []);

  useEffect(() => {
    showScene && registerMarkerComponents(setShowMarkers, handleMarkerFound);
  }, [showScene]);

  const handleMarkerFound = (markerName) => {
    const marker = props.markers.find((marker) => marker.markerName === markerName);
    props.onMarkerChange(marker);
  }

  return (
    <>
      <div className="arjs-loader">
        <Overlay show>
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
            props.markers.map(({ markerName }) => (
              <Marker
                markerName={markerName}
                key={markerName}
              />
            ))}
          <a-entity camera></a-entity>
        </a-scene>
      )}
    </>
  );
};

export default Ar;
