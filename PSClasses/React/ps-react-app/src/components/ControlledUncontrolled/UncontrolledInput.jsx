import React, { useRef, useState } from 'react'

const UncontrolledInput = () => {
    const inputRef = useRef(null);
    const [output, setOutput] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
       setOutput(inputRef.current.value)
    }
  return (
    <div>
        <h2>Uncontrolled Component Example </h2>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputRef} />
            <button type='submit'>Submit</button>
        </form>
        <p>{output}</p>
    </div>
  )
}

export default UncontrolledInput