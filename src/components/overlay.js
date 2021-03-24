import React, { useState, useEffect } from 'react';
import Video from './video';
import Focus from './focus';
import '../../node_modules/video-react/dist/video-react.css';
import * as overlayStyles from './overlay.module.css';

const Overlay = (props) => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    setVideoSrc(
      props.videoName
        ? `https://litc0de.github.io/ar-slanted/videos/${props.videoName}`
        : null
    );
  }, [props.videoName]);

  return (
    <div className={overlayStyles.overlay}>
      {videoSrc && <Video src={videoSrc} />}
      {!videoSrc && <Focus />}
    </div>
  );
};

export default Overlay;
