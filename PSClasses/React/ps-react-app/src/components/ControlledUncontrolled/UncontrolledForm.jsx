import React, { useRef } from 'react'

const UncontrolledForm = () => {

    const nameRef = useRef('null');
    const emailRef = useRef('null');

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`${nameRef.current.value} - ${emailRef.current.value}`)
    }
    //no onChange in uncontrolled forms
    //Because the input's value is managed by the DOM, not by React.
  return (
    <div>
        <h2>Uncontrolled Form Example</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter name' ref={nameRef} />
            <input type='email' placeholder='enter email' ref={emailRef} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForm