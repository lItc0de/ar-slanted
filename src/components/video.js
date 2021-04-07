import React, { useEffect, useRef, useState } from 'react';
import {
  Player,
  ControlBar,
  VolumeMenuButton,
  BigPlayButton,
} from 'video-react';
import LoadingSpinner from './loading-spinner';
import * as videoStyles from './video.module.css';

const Video = (props) => {
  const playerRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);

  const handleStateChange = (state) => {
    setVideoStarted(state.hasStarted);
  };

  useEffect(() => {
    playerRef.current.subscribeToStateChange(handleStateChange);
  }, [playerRef]);

  return (
    <>
      {!videoStarted && <LoadingSpinner />}
      <Player
        src={props.src}
        ref={playerRef}
        className={`${videoStyles.video} ${videoStarted ? '' : videoStyles.videoHidden}`}
        playsInline
        muted
        loop
        autoPlay
      >
        <BigPlayButton position="center" />
        <ControlBar
          autoHide={false}
          className={videoStyles.controlBar}
          disableDefaultControls
        >
          <VolumeMenuButton vertical />
        </ControlBar>
      </Player>
    </>
  );
};

export default Video;
