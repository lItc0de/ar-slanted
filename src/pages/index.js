import * as React from 'react';
import '../styles.scss';

import { Helmet } from 'react-helmet';
import Ar from '../components/ar';
import Header from '../components/header';
import Footer from '../components/footer';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Ar test</title>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
      </Helmet>
      <Header />
      <Ar />
      <Footer />
    </>
  );
};

export default IndexPage;
