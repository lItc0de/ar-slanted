import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { NumberList, NumberListItem } from '../components/number-list';
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
        <h3>ai — choose chapter</h3>

        <NumberList>
          {chapters.map(({ number, title }) => (
            <NumberListItem key={number} number={number}>
              <Link className={indexStyles.listLink} to={generateLink(number)}>{title}</Link>
            </NumberListItem>
          ))}
        </NumberList>
      </Layout>
    </>
  );
};

export default IndexPage;
