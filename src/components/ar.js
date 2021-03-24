/* globals AFRAME */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import markers from '../data/markers.json';
import Marker from './marker';
import Overlay from './overlay';
import waitForGlobal from '../utils/waitForGlobal';

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

const loadScript = (file) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', function (e) {
      if (req.readyState == 2 && req.status == 200) {
        // Download will start
      } else if (req.readyState == 3) {
        // Download is happenning
      } else if (req.readyState == 4) {
        // Downloading has finished

        const script = document.createElement('script');
        script.innerHTML = req.response;

        document.head.appendChild(script);

        console.log('script loaded 1');

        return resolve();
      }
    });

    req.addEventListener('progress', function (e) {
      if (e.lengthComputable === true) {
        var download_percent = (e.loaded / e.total) * 100;
        console.log(download_percent);
      }
    });

    req.responseType = 'text';

    req.open('GET', file);

    req.send();
  });
};

const Ar = () => {
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
    arjsVideoLoaded && arjsLoaded && arjsVideoLoaded &&
      registerMarkerComponents(setShowMarker, setCurrentVideoName);
  }, [arjsVideoLoaded]);

  return (
    <>
      {/* <Helmet>
        {aframeLoaded && (
          <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
        )}
      </Helmet> */}

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

export default Ar;
