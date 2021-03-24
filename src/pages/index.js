import * as React from 'react';
import '../styles.scss';

import { Helmet } from 'react-helmet';
import Ar from '../components/ar';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Ar test</title>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
      </Helmet>
      <Ar />
    </>
  );
};

export default IndexPage;
