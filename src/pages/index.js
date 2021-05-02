import React from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import chapters from '../data/markers.json'
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
          {chapters.map(({ number, title }) => (
            <div className="link_wrapper" key={number}>
              <div className="index_number">{number}</div>
              <Link to={`/ar/${number}`}>{title}</Link>
            </div>
          ))}
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
