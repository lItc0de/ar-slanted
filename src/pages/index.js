import * as React from 'react';
import '../styles.scss';

import { Helmet } from 'react-helmet';
// import Ar from '../components/ar';
import Test from '../components/test';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Ar test</title>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        {/* <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script> */}
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js" rel="preload"></script>
      </Helmet>
      <Test />
    </>
  );
};

export default IndexPage;
