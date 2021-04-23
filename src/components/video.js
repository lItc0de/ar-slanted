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

  const handleStateChange = (state) => {
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
        <div>
          <Player
            src={`https://downloads.slanted.de/Slanted-Magazine/AI/${props.videoName}`}
            ref={playerRef}
            className={videoStyles.video}
            fluid={false}
            width="100%"
            height="100%"
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
        </div>
        <h4>{props.author}</h4>
      </div>
    </>
  );
};

export default Video;
