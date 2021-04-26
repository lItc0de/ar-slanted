import React, { useEffect, useState, useRef } from 'react';
import markers from '../data/markers.json';

import initWebcam from '../services/webcamController';
import WorkerController from '../services/workerController';

import * as arStyles from './ar.module.scss';

const Ar = (props) => {
  const webcam = useRef(null);

  const [workerController, setWorkerController] = useState(null)

  useEffect(() => {
    initWebcam(onWebcamReady);
  }, []);

  useEffect(() => {
    if (props.currentMarker !== null) return;
    if (!workerController) return;

    workerController.process();
  }, [props.currentMarker])

  const onWebcamReady = (stream) => {
    webcam.current.srcObject = stream;
    webcam.current.play();
    const controller = new WorkerController(markers, webcam, handleMarkerFound);
    controller.startTracking();
    setWorkerController(controller);
  };

  const handleMarkerFound = (marker) => {
    props.onMarkerChange(marker);
  }

  return (
    <>
      <video ref={webcam} loop autoPlay muted playsInline className={arStyles.webcam}></video>
    </>
  );
};

export default Ar;
