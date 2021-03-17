import React from 'react';
import * as videoStyles from './video.module.css';

const Video = (props) => {
  return (
    <video
      src={props.src}
      className={videoStyles.video}
      playsInline
      muted
      loop
      autoPlay
    ></video>
  );
};

export default Video;
