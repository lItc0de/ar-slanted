import React from 'react';
import * as headerStyles from './header.module.scss';

const Header = ({ chapter }) => {
  return (
    <header className={headerStyles.header}>
      <h3>ai - {chapter}</h3>
    </header>
  )
}

export default Header;
