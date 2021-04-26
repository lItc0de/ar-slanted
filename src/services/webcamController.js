const handleError = (error) => {
  console.log('error', error);
  alert('error', error.message);
};

const constraints = {
  audio: false,
  video: {
    facingMode: 'environment',
    // facingMode: 'user',
    width: 640,
    height: 480,
    frameRate: { max: 30 },
  }
};

const initWebcam = (callback) => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia(constraints, callback, handleError);
  } else {
    console.log('called');
    navigator.mediaDevices.getUserMedia(constraints)
      .then(callback)
      .catch(handleError);
  }
};

export default initWebcam;
