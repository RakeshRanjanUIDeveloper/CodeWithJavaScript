import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('Rakesh');
    const [age, setAge] = useState(34);

    const handleAge = () =>{
        setAge(age+1)
    }
  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAge}>Increment Age</button>
        <p>I am {name} and i am {age} years old</p>
    </div>
  )
}

export default Form