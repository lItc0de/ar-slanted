import React from 'react';

import * as numberListStyles from './number-list.module.scss';

export const NumberList = ({ children }) => (
  <ul className={numberListStyles.list}>
    {children}
  </ul>
)

export const NumberListItem = ({ children, number, onClick }) => (
  <li className={numberListStyles.listItem} onClick={onClick}>
    <span className={numberListStyles.listNumber}>{number}</span>
    {children}
  </li>
)
