/* globals AFRAME */

import React, { useEffect, useState } from 'react';
import markers from '../data/markers.json';
import Marker from './marker';
import Overlay from './overlay';

const moveVideo = () => {
  const video = document.getElementById('arjs-video');
  const aScene = document.getElementById('a-scene');
  aScene.after(video);
  console.log('moved video');
}

const registerMarkerComponents = async (setShowMarker, setCurrentVideoName) => {
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
}

const Ar = () => {
  const [showMarker, setShowMarker] = useState(false);
  const [currentVideoName, setCurrentVideoName] = useState(null);

  useEffect(() => {
    window.addEventListener('arjs-video-loaded', moveVideo);
    registerMarkerComponents(setShowMarker, setCurrentVideoName);
  }, []);

  return (
    <>
      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>

      <a-scene
        id="a-scene"
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        {showMarker && markers.map((marker) => (
          <Marker name={marker.name} markerName={marker.markerName} videoName={marker.videoName} />
        ))}
        <a-entity camera></a-entity>
      </a-scene>

      <Overlay videoName={currentVideoName}/>
    </>
  );
};

export default Ar;
