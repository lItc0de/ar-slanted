import React from 'react';
import * as footerStyles from './footer.module.scss';
import Info from '../svg-icons/info.svg';

const footer = () => {
  return (
    <div className={footerStyles.footer}>
      <a href="./imprint" target="_blank"><Info className={footerStyles.svg} /></a>
    </div>
  );
};

export default footer;
