const handleError = (error) => {
  console.log('error', error);
};

const constraints = {
  audio: false,
  video: {
    //facingMode: "environment",
    facingMode: 'user',
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
  }
};

export default initWebcam;
