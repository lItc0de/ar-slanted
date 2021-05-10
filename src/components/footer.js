import React, { useState, useEffect } from 'react';
import * as footerStyles from './footer.module.scss';
import Info from '../svg-icons/info.svg';

import { Link } from 'gatsby';

const Footer = (props) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (!props.location) return;

    debugger

    setPathname(props.location.pathname)
  }, [props.location])


  return (
    <div className={footerStyles.footer}>
      {pathname !== '/' && <Link to="/">Home</Link>}
      {pathname !== '/imprint' && <Link to="/imprint"><Info className={footerStyles.svg} /></Link>}
    </div>
  );
};

export default Footer;
