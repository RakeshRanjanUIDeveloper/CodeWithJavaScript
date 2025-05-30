import React, { useState } from 'react'

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:''
    })

    const handleFormData = (e) =>{
        // Why [e.target.name] with square brackets?
        // Using square brackets around a variable or expression is called a computed property name.
        // It means: evaluate the expression inside the brackets, and use the result as the key name.

        //We use e.target.name to dynamically update the correct field 
        //It uses the input’s name attribute as the key in the object.
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${formData.name} and my email id is ${formData.email}`)
    }

  return (
    <div> 
        <h2>Controlled Form Example</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your name' value={formData.name} name='name'  onChange={handleFormData} />
            <input type='email' placeholder='Enter your email' value={formData.email} name='email'  onChange={handleFormData} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm