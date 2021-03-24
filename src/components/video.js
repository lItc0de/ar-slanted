import React from 'react';
import { Player, ControlBar, VolumeMenuButton, BigPlayButton } from 'video-react';
import * as videoStyles from './video.module.css';

const Video = (props) => {
  return (
    <Player
      src={props.src}
      className={videoStyles.video}
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
  );
};

export default Video;
