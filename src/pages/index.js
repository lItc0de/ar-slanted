import React, { useEffect } from 'react';
import '../styles.scss';

import loadScript from '../utils/loadScript';
import { Helmet } from 'react-helmet';
import Ar from '../components/ar';
// import ArThree from '../components/ar-three';
// import ArToolkit from '../components/ar-toolkit';

const IndexPage = () => {
  // useEffect(() => {
  //   global.artoolkit_wasm_url = '/vendor/artoolkit_wasm.wasm';
  //   loadScript('/vendor/artoolkit_wasm.js');
  // })

  return (
    <>
      <Helmet>
        <title>Ar test</title>
        {/* <script src="https://unpkg.com/three@0.126.1/build/three.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-nft.js"></script> */}
        {/* <script src="vendor/artoolkit.min.js"></script> */}
        {/* <script src="/vendor/artoolkit.wasm.js"></script> */}
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
      </Helmet>
      <Ar />
    </>
  );
};

export default IndexPage;
