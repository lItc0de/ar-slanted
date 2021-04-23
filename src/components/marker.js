import React from 'react';

const Marker = (props) => {
  return (
    <a-nft
      id={props.markerName}
      type="nft"
      marker={`markerName: ${props.markerName}`}
      url={`https://downloads.slanted.de/Slanted-Magazine/AI/${props.markerName}`}
      smooth="true"
      smoothcount="10"
      smoothtolerance=".01"
      smooththreshold="5"
    ></a-nft>
  )
}

export default Marker;
