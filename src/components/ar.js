import React, { useEffect, useState, useRef } from 'react';
import markers from '../data/markers.json';

import Overlay from './overlay';
import LoadingSpinner from './loading-spinner';
import Video from './video';
import Focus from './focus';

import initWebcam from '../services/webcamController';
import WorkerController from '../services/workerController';

import '../../node_modules/video-react/dist/video-react.css';

const getMarker = (markerName) => {
  return markers.find((marker) => marker.markerName === markerName) || null;
};

const Ar = () => {
  const webcam = useRef(null);
  const canvas = useRef(null);

  const [currentMarker, setCurrentMarker] = useState(null);
  const [workerController, setWorkerController] = useState(null)

  const handleVideoClose = () => {
    setCurrentMarker(null);
    workerController.process();
  };

  useEffect(() => {
    initWebcam(onWebcamReady);
  }, []);

  const onWebcamReady = (stream) => {
    webcam.current.srcObject = stream;
    const controller = new WorkerController(markers, canvas, webcam, handleMarkerFound);
    controller.startTracking();
    setWorkerController(controller);
  };

  const handleMarkerFound = (marker) => {
    if (currentMarker === marker) return;
    setCurrentMarker(marker);
  }

  return (
    <>
      <div className="arjs-loader">
        <Overlay>
          <LoadingSpinner />
        </Overlay>
      </div>

      <video ref={webcam} loop autoPlay muted playsInline id="webcam"></video>
      <canvas ref={canvas} width="640" height="480" />

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
      </Overlay>
    </>
  );
};

export default Ar;
