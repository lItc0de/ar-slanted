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
        <title>Ar Slanted</title>
      </Helmet>
      <Header />
      <Ar />
      <Footer />
    </>
  );
};

export default IndexPage;
