import React, { useState } from 'react'

const Welcome = () => {
    const [fontSize, setFontSize] = useState(18);

    const handlePlus = () =>{
        setFontSize((prevFont) => prevFont +1)
    }
    const handleMinus = () =>{
        setFontSize((prevFont) => prevFont -1)
    }
  return (
    <div>
        <h2 style={{fontSize:`${fontSize}px`}}>Welcome</h2>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default Welcome