/* globals AFRAME */

import React, { useEffect, useState } from 'react';

const Test = () => {
  const [showMarker, setShowMarker] = useState(false);

  useEffect(() => {
    console.log('useEffect called');
    AFRAME.registerComponent('marker', {
      schema: {
        videoId: { type: 'string', default: 'the-fabricant-overlay' },
      },

      init: function () {
        const marker = this.el;
        const videoId = this.data.videoId;
        console.log('videoId: ', videoId);
        console.log('markerId: ', marker.id);

        marker.addEventListener('markerFound', () => {
          console.log('Marker found');
          document.getElementById(videoId).style.display = 'flex';
        });

        marker.addEventListener('markerLost', () => {
          document.getElementById(videoId).style.display = 'none';
        });
      },
    });

    setShowMarker(true);
  }, []);

  return (
    <>
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>

      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        {showMarker && (
          <>
            <a-nft
              id="fabricant-marker"
              type="nft"
              marker="videoId: the-fabricant-overlay"
              url="https://cdn.glitch.com/7360ab30-594d-4acf-94db-244075d0619a%2Ffabricant_marker"
              smooth="true"
              smoothcount="10"
              smoothtolerance=".01"
              smooththreshold="5"
            ></a-nft>

            <a-nft
              id="digitalls-marker"
              type="nft"
              marker="videoId: the-digitalls-overlay"
              url="https://cdn.glitch.com/7360ab30-594d-4acf-94db-244075d0619a%2Fdigitalls_marker"
              smooth="true"
              smoothcount="10"
              smoothtolerance=".01"
              smooththreshold="5"
            ></a-nft>
          </>
        )}
        <a-entity camera></a-entity>
      </a-scene>

      <div class="overlay" id="the-fabricant-overlay">
        <video
          id="the-fabricant"
          src="https://cdn.glitch.com/7360ab30-594d-4acf-94db-244075d0619a%2F01_The%20Fabricant.mp4?v=1614372224071"
          playsinline="true"
          muted="true"
          loop="true"
          autoplay="true"
        ></video>
      </div>

      <div class="overlay" id="the-digitalls-overlay">
        <video
          id="the-digitalls"
          src="https://cdn.glitch.com/7360ab30-594d-4acf-94db-244075d0619a%2F02_The%20Digitalls.mp4?v=1614372224395"
          playsinline="true"
          muted="true"
          loop="true"
          autoplay="true"
        ></video>
      </div>
    </>
  );
};

export default Test;
