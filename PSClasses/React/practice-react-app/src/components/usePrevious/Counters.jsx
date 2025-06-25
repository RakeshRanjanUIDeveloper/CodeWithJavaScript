import React, { useState } from 'react'
import usePrevious from './usePrevious';

const Counters = () => {
    const [currentCount, setCurrentCount] = useState(0);
    const previousCount = usePrevious(currentCount);
    const handleIncrement =() =>{
        setCurrentCount((prev) => prev+1);
    }
     const handleDecrement =() =>{
        setCurrentCount((prev) => prev-1);
    }
    const handleReset = () =>{
        setCurrentCount(0)
    }
  return (
    <div>
        <h2>Current Count : {currentCount}</h2>
        <h2>Previous Count : {previousCount}</h2>

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Reset</button>
        <button onClick={handleReset}>Decrement</button>
    </div>
  )
}

export default Counters