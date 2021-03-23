import React from 'react';
import * as focusStyles from './focus.module.css';

const Focus = () => (
  <>
    <div className={focusStyles.topLeft}></div>
    <div className={focusStyles.topRight}></div>
    <div className={focusStyles.bottomLeft}></div>
    <div className={focusStyles.bottomRight}></div>
  </>
);

export default Focus;
