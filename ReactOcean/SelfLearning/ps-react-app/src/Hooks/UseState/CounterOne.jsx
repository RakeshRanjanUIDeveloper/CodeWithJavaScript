import React, { useState } from 'react'

const CounterOne = () => {
    const [age, setAge] = useState(42);
    function increment(){
        setAge((age) => age+1)
    }
  return (
    <div>
        <p>Your Age - {age}</p>
        <button onClick={() => {
            increment();
            increment();
            increment();
        }}>+3</button>
        <button onClick={() => {
            increment();
        }}>+1</button>
    </div>
  )
}

export default CounterOne