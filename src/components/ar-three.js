import React, { useEffect } from 'react';
import markers from '../data/markers.json';
import initThree from '../utils/initThree';
import waitForGlobal from '../utils/waitForGlobal';

const ArThree = () => {
  useEffect(() => {
    Promise.all([waitForGlobal('THREE'), waitForGlobal('THREEx')]).then(() => {
      initThree(markers);
    });
  });

  return (
    <div className="arjs-loader">
      <div className="arjs-loader-spinner"></div>
    </div>
  );
};

export default ArThree;
