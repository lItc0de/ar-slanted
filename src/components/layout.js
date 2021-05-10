import React from 'react';

import * as layoutStyles from './layout.module.scss';
import Footer from './footer';

const Layout = ({ children }) => (
  <main className={layoutStyles.layout}>
    <div className={layoutStyles.content}>
      {children}
    </div>

    <Footer />
  </main>
)

export default Layout;
