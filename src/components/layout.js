import React, { useEffect } from 'react';

import * as layoutStyles from './layout.module.scss';
import Footer from './footer';

const Layout = ({ children, ar, location, flex }) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    console.log(ar);

    if (ar) {
      body.style.overflow = 'hidden';
      body.style.height = 'calc(var(--vh, 1vh) * 100)';
      body.style.width = '100vw';
    } else {
      body.style.overflow = 'auto';
      body.style.height = 'auto';
      body.style.width = '100vw';
    }
  }, [ar])

  return (
    <main className={`${ar ? layoutStyles.layoutAr : layoutStyles.layout} ${flex && layoutStyles.flex}`}>
      <div className={layoutStyles.content}>
        {children}
      </div>

      <Footer location={location} ar={ar} />
    </main>
  )
}

export default Layout;
