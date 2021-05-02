import React from 'react';

import { Helmet } from 'react-helmet';

import '../styles.scss';


const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>slanted ar</title>
      </Helmet>

      <div className="center_wrapper">
        <h1> ai — choose chapter </h1>

        <div className="menu">
          <div className="link_wrapper">
            <div className="index_number">1</div>
            <a href="error.html">Digital Culture</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">2</div>
            <a href="#">Glitch</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">3</div>
            <a href="#">Transhumanism</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">4</div>
            <a href="#">Privacy</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">5</div>
            <a href="#">Echochambers</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">6</div>
            <a href="#">Connection</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">7</div>
            <a href="#">Chances</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">8</div>
            <a href="#">Dead Ends</a>
          </div>
          <div className="link_wrapper">
            <div className="index_number">9</div>
            <a href="#">Rules</a>
          </div>
        </div>

        <div className="footer">
          <div className="info_link_wrapper">
            <a href="imprint.html">i</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
