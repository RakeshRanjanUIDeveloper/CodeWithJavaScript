import React, { useState } from "react";
import "./Timer.css";
const Timer = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    setIntervalId(setInterval(()=>{
        setCount((prev) => prev+1)
    }, 1000))
  };
  const handlePause = () => {
      clearInterval(intervalId)
      setIntervalId(null)
  };
  const handleReset = () => {
      clearInterval(intervalId);
      setIntervalId(null);
      setCount(0);
  };
  return (
    <div className="timer-container">
      <div className="timer-box"> Timer - {count}</div>
      <div className="timer-buttons">
        <div className="timer-btn" onClick={handleStart}>Start</div>
        <div className="timer-btn" onClick={handlePause}>Pause</div>
        <div className="timer-btn" onClick={handleReset}>Reset</div>
      </div>
    </div>
  );
};

export default Timer;
