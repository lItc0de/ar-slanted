import React, { useEffect } from 'react';
import * as overlayStyles from './overlay.module.scss';

const Overlay = ({ children, grey, show }) => {
  useEffect(() => {
    if (!grey) return;
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = show ? 'hidden' : 'auto';
  }, [show, grey]);

  return (
    <>
      {show && (
        <div className={`${overlayStyles.overlay} ${grey ? overlayStyles.grey : ''}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default Overlay;
