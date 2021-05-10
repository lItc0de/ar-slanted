import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout'

import chapters from '../data/markers.json'
import getBrowserVersion from '../services/browserVersion';

import * as indexStyles from './index.module.scss';
import '../styles.scss';


const IndexPage = (props) => {
  const [browserVersion, setBrowserVersion] = useState('');

  useEffect(() => {
    setBrowserVersion(getBrowserVersion());
  }, [])

  const generateLink = (number) => {
    const validVersions = ['crios', 'chrome'];
    const isChrome = validVersions.includes(browserVersion);
    if (isChrome) return `/ar/${number}`;

    return `/fallback/${number}`;
  };

  return (
    <>
      <Helmet>
        <title>slanted ar</title>
      </Helmet>

      <Layout location={props.location}>
        <h3 className={indexStyles.title}>ai — choose chapter</h3>

        <ul className={indexStyles.menu}>
          {chapters.map(({ number, title }) => (
            <li className={indexStyles.menuItem} key={number}>
              <span className={indexStyles.menuNumber}>{number}</span>
              <Link className={indexStyles.menuLink} to={generateLink(number)}>{title}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default IndexPage;
