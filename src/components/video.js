import React, { useEffect, useRef, useState } from 'react';
import {
  Player,
  ControlBar,
  VolumeMenuButton,
  BigPlayButton,
} from 'video-react';
import LoadingSpinner from './loading-spinner';
import * as videoStyles from './video.module.scss';
import Close from '../svg-icons/close.svg';

const Video = (props) => {
  const playerRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoSize, setVideoSize] = useState({ width: 'auto', height: 'auto' });

  const calculateSize = (videoWidth, videoHeight) => {
    const videoRatio = videoWidth / videoHeight;

    const windowWidth = window.innerWidth - 30;
    const windowHeight = window.innerHeight - 200;

    const heightX = windowWidth / videoRatio;
    const widthX = windowHeight * videoRatio;

    if (heightX <= windowHeight) {
      setVideoSize({ width: windowWidth, height: heightX });
      return;
    }

    setVideoSize({ width: widthX, height: windowHeight });
  };

  const handleStateChange = (state) => {
    if (state.hasStarted) {
      calculateSize(state.videoWidth, state.videoHeight);
    }
    setVideoStarted(state.hasStarted);
  };

  useEffect(() => {
    playerRef.current.subscribeToStateChange(handleStateChange);
  }, [playerRef]);

  return (
    <>
      {!videoStarted && (
        <LoadingSpinner className={videoStyles.loadingSpinner} />
      )}
      <div
        className={`${videoStyles.wrapper} ${
          videoStarted ? '' : videoStyles.wrapperHidden
        }`}
      >
        <div className={videoStyles.titleContainer}>
          <h4>{props.description}</h4>
          <button
            className={videoStyles.closeBtn}
            onClick={props.handleVideoClose}
          >
            <Close className={videoStyles.svg} />
          </button>
        </div>
        <Player
          src={`https://downloads.slanted.de/Slanted-Magazine/AI/${props.videoName}`}
          ref={playerRef}
          className={videoStyles.video}
          fluid={false}
          width={videoSize.width}
          height={videoSize.height}
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
        <h4>{props.author}</h4>
      </div>
    </>
  );
};

export default Video;
