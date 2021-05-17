import React, { useState, useEffect } from 'react';
import * as footerStyles from './footer.module.scss';

import Back from '../svg-icons/keyboard-backspace.svg';
import { Link } from 'gatsby';

const Footer = ({ location, ar }) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (!location) return;

    setPathname(location.pathname)
  }, [location])


  return (
    <div className={`${footerStyles.footer} ${ar && footerStyles.footerAr}`}>
      {ar && <span>{pathname !== '/' && <Link  className={footerStyles.backBtn} to="/"><Back />&nbsp;Chapters</Link>}</span>}

      {!ar && (
        <>
          <span>{pathname !== '/' && <Link to="/">Home</Link>}</span>
          <span>{pathname !== '/imprint' && <Link to="/imprint">i</Link>}</span>
        </>
      )}
    </div>
  );
};

export default Footer;
