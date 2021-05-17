import React, { useState, useEffect } from 'react';
import * as footerStyles from './footer.module.scss';

import { Link } from 'gatsby';

const Footer = (props) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (!props.location) return;

    setPathname(props.location.pathname)
  }, [props.location])


  return (
    <div className={footerStyles.footer}>
      <span>{pathname !== '/' && <Link to="/">Home</Link>}</span>
      <span>{pathname !== '/imprint' && <Link to="/imprint">i</Link>}</span>
    </div>
  );
};

export default Footer;
