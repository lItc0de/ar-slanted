import React from 'react';
import { Helmet } from 'react-helmet';

import '../styles.scss';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>slanted ar - unsupported</title>
      </Helmet>

      <div className="center_wrapper">
        <h1>augmented reality glitch</h1>

        <div className="error_message">
          This device is currently not ready for AR on the web.
          <br/> We are sorry.
        </div>
      </div>

      <div className="footer shadow">
        <div className="chapter_link_wrapper">
          <a href="landing.html">← CHAPTERS</a>
        </div>

        <div className="info_link_wrapper">
          <a href="imprint.html">i</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
