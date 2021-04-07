import React from 'react';
import * as focusStyles from './focus.module.scss';

const Focus = () => (
  <div className={focusStyles.wrapper}>
    <div className={focusStyles.topLeft}></div>
    <div className={focusStyles.topRight}></div>
    <div className={focusStyles.bottomLeft}></div>
    <div className={focusStyles.bottomRight}></div>
  </div>
);

export default Focus;
