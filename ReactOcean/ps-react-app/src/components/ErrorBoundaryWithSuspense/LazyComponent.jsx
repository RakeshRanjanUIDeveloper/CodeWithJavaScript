import React from 'react';

const LazyComponent = () => {
  throw new Error("Simulated error in LazyComponent");
};

export default LazyComponent;
