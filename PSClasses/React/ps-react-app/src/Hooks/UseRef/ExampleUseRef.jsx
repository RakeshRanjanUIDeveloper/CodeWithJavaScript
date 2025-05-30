import React, { useRef } from 'react'

const ExampleUseRef = () => {
    const countRef = useRef(0);

    const handleIncrement = () =>{
        countRef.current = countRef.current +1;
        // In this case, the count does increase, but it's only visible in the console — not in the UI — 
        // because useRef updates do not cause re-renders.
        console.log(countRef.current);
    }
  return (
    <div>
        <h2>Example useRef</h2>
        <button onClick={handleIncrement}>Increment</button>
        
    </div>
  )
}

export default ExampleUseRef