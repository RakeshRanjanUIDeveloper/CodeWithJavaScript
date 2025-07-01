import React, { useState } from 'react'

const ZigzagString = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = () =>{
        if(!input.trim()) return;
        console.log(input);
        const array = input.split(',').map((s) => s.trim())
        console.log(array);
        setResult(zigzagJoin(array))   
    }
    const zigzagJoin = (array) =>{
        return array.map((str,i) => (i%2 === 0 ? str: str.split("").reverse().join(""))).join("");
    } 
  return (
    <div className='zigzag-container'>
        <h1>Array to Zigzag String</h1>
        <input type='text'  data-testid="input-box" placeholder="Enter strings like one,two,three" value={input} onChange={(e) => setInput(e.target.value)} />
        <button data-testid="submit-button" onClick={handleSubmit}>Submit</button>
        <p  data-testid="output-result" className='output-result'>Output: {result}</p>
    </div>
  )
}

export default ZigzagString