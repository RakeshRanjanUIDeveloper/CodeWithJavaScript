import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const getColor = (value) => {
    if (value < 40) return 'red';
    if (value < 80) return 'orange';
    return 'green';
  };

  const handleIncrement = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrement = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  const progressBarContainerStyle = {
    width: '100%',
    height: '30px',
    border: '1px solid #000',
    borderRadius: '5px',
    overflow: 'hidden',
    marginBottom: '10px'
  };

  const progressBarFillStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: getColor(progress),
    transition: 'width 0.3s ease',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
      <div style={progressBarContainerStyle}>
        <div id="testBgColor" style={progressBarFillStyle}></div>
      </div>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>{progress}%</div>
      <button style={buttonStyle} onClick={handleDecrement}>-10%</button>
      <button style={buttonStyle} onClick={handleIncrement}>+10%</button>
    </div>
  );
};

export default ProgressBar;
