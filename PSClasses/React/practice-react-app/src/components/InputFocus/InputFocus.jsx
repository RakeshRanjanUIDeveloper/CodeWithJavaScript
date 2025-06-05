import React, { useRef, useState } from 'react'

const InputFocus = () => {
    const [text, setText] = useState('')
    const inputRef = useRef();

    const handleFocus = () =>{
        inputRef.current.focus()
    }
  return (
    <div>
        <input type="text"
        placeholder="Type here"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }} value={text} ref={inputRef} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleFocus} style={{ padding: '8px 12px'} }>Focus Input</button>
    </div>
  )
}

export default InputFocus