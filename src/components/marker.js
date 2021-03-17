import React from 'react';

const Marker = (props) => {
  return (
    <a-nft
      id={props.name}
      type="nft"
      marker={`videoName: ${props.videoName}`}
      url={`https://litc0de.github.io/ar-slanted/markers/${props.markerName}`}
      smooth="true"
      smoothcount="10"
      smoothtolerance=".01"
      smooththreshold="5"
    ></a-nft>
  )
}

export default Marker;
