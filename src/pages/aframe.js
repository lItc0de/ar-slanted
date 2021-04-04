/* globals AFRAME */

import React, { useEffect, useState } from 'react';
import markers from '../data/markers.json';
import Marker from '../components/marker';
import Overlay from '../components/overlay';
import waitForGlobal from '../utils/waitForGlobal';
import Helmet from 'react-helmet';
import loadScript from '../utils/loadScript';

const moveVideo = () => {
  const video = document.getElementById('arjs-video');
  const aScene = document.getElementById('a-scene');
  aScene.after(video);
  console.log('moved video');
};

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
};

const Aframe = () => {
  const [aframeLoaded, setAframeLoaded] = useState(false);
  const [arjsLoaded, setArjsLoaded] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const [arjsVideoLoaded, setArjsVideoLoaded] = useState(false);
  const [currentVideoName, setCurrentVideoName] = useState(null);

  const arjsVideoLoadedHandler = () => {
    console.log('video loaded handler');
    moveVideo();
    setArjsVideoLoaded(true);
  };

  useEffect(() => {
    window.addEventListener('arjs-video-loaded', arjsVideoLoadedHandler);
    waitForGlobal('AFRAME').then(() => {
      setAframeLoaded(true);
      loadScript(
        'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'
      ).then(() => {
        console.log('script loaded 2');
        setArjsLoaded(true);
      })
    });
  }, []);

  useEffect(() => {
    if (!arjsVideoLoaded || !arjsLoaded || !aframeLoaded) return;
    registerMarkerComponents(setShowMarker, setCurrentVideoName);
    console.log('effect loaded');
  }, [arjsVideoLoaded, arjsLoaded, aframeLoaded]);

  return (
    <>
      <Helmet>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        {/* {aframeLoaded && (
          <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
        )} */}
      </Helmet>

      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>

      {aframeLoaded && arjsLoaded && (
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

      <Overlay videoName={currentVideoName} />
    </>
  );
};

export default Aframe;
