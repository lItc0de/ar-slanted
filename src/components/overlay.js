import React from 'react';
import * as overlayStyles from './overlay.module.scss';

const Overlay = (props) => {
  return (
    <div className={`${overlayStyles.overlay} ${props.grey ? overlayStyles.grey : ''}`}>
      {props.children}
    </div>
  );
};

export default Overlay;
