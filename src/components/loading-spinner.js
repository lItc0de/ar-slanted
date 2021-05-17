import React from 'react';
import * as spinnerStyles from './loading-spinner.module.scss';

const LoadingSpinner = ({ className, children }) => {
  return (
    <div className={spinnerStyles.spinnerWrapper}>
      <div className={`${spinnerStyles.loadingSpinner} ${className}`}></div>
      <div>{children}</div>
    </div>
  )
}

export default LoadingSpinner;
