import React from 'react';
import LoadingIndicatorIcon from './loading-indicator-icon.svg';

import './index.css';

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator-container">
      <p>Loading...</p>
      <div>
        <img src={LoadingIndicatorIcon} alt="" />
      </div>
    </div>
  );
};

export default LoadingIndicator;
