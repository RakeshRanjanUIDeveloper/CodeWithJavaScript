import React from 'react';

const Shimmer = ({ headerText }) => {
  return (
    <div className="shimmer-wrapper">
      {headerText && <h3 className="shimmer-header">{headerText}</h3>}
      <div className="shimmer-loader">
        <div className="shimmer-line long"></div>
        <div className="shimmer-line medium"></div>
        <div className="shimmer-line short"></div>
      </div>
    </div>
  );
};

export default Shimmer;
