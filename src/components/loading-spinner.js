import React from 'react';
import * as spinnerStyles from './loading-spinner.module.scss';

const LoadingSpinner = ({ className }) => {
  return <div className={`${spinnerStyles.loadingSpinner} ${className}`}></div>
}

export default LoadingSpinner;
