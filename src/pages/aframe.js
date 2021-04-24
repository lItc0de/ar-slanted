import * as React from 'react';
import '../styles.scss';

import Header from '../components/header';
import Footer from '../components/footer';
import Ar from '../components/aframe/ar';

const AframePage = () => {
  return (
    <>
      <Header />
      <Ar />
      <Footer />
    </>
  );
};

export default AframePage;
