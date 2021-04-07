import React from 'react';
import footerStyles from './footer.module.scss';
import Info from '../svg-icons/info.svg';

const footer = () => {
  return (
    <div className={footerStyles.footer}>
      <a href="/imprint" target="_blank"><Info /></a>
    </div>
  );
};

export default footer;
