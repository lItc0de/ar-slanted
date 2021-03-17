import React from 'react';
import * as focusStyles from './focus.module.css';

const Focus = () => (
  <>
    <div className={focusStyles.top}></div>
    <div className={focusStyles.left}></div>
    <div className={focusStyles.right}></div>
    <div className={focusStyles.bottom}></div>
  </>
);

export default Focus;
