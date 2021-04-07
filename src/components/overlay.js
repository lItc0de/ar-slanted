import React from 'react';
import * as overlayStyles from './overlay.module.css';

const Overlay = ({ children }) => {
  return (
    <div className={overlayStyles.overlay}>
      {children}
    </div>
  );
};

export default Overlay;
