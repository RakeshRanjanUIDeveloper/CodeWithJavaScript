import React, { useState } from 'react'

const ControlledInput = () => {
    const [name, setName] = useState('');

    const handleName = (e) =>{
        setName(e.target.value)
    }

  return (
    <div>
        <h2>Controlled Component Example</h2>
        <input type='text' value={name} onChange={(e) => handleName(e)} />
        <p>{name}</p>
    </div>
  )
}

export default ControlledInput