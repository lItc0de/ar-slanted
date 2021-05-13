import React, { useEffect } from 'react';

import * as layoutStyles from './layout.module.scss';
import Footer from './footer';

const Layout = ({ children, ar }) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    console.log(ar);

    if (ar) {
      body.style.overflow = 'hidden';
      body.style.height = '100vh';
      body.style.width = '100vw';
    } else {
      body.style.overflow = 'auto';
      body.style.height = 'auto';
      body.style.width = '100vw';
    }
  }, [ar])

  return (
    <main className={ar ? layoutStyles.layoutAr : layoutStyles.layout}>
      <div className={layoutStyles.content}>
        {children}
      </div>

      <Footer />
    </main>
  )
}

export default Layout;
