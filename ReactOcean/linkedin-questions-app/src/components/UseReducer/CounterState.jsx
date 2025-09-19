import React, { useState } from 'react'

const CounterState = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        setCount((prev) => prev+1)
    }
    const handleDecrement = () =>{
        setCount((prev) => prev-1)
    }
    const handleReset = () =>{
        setCount(0)
    }
  return (
    <React.Fragment>
        <h2>Counter using useState Hook</h2>
        <h3>Count - {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  )
}

export default CounterState