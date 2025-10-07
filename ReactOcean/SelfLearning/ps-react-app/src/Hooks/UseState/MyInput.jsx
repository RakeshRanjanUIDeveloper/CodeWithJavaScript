import React, { useState } from 'react'

const MyInput = () => {
    const [text, setText] = useState('hello');

    const handleChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <div>
        <input type='text' value={text} onChange={handleChange} />
        <p>{text}</p>
        <button onClick={() => setText('hello')}>Reset</button>
    </div>
  )
}

export default MyInput