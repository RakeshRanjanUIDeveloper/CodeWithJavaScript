import React, { useState } from 'react'

const FormObject = () => {
    const [form, setForm] = useState({
        fname:'Rakesh',
        lname:'Ranjan',
        email:'rakeshranjan@gmail.com'
    })
  return (
    <div>
        <label>First Name : <input type='text' value={form.fname} onChange={(e) => setForm({...form, fname:e.target.value})} /></label>
        <label>Last Name : <input type='text' value={form.lname} onChange={(e) => setForm({...form, lname:e.target.value})} /></label>
        <label>Email : <input value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} /></label>
          <p>
        {form.fname}{' '}
        {form.lname}{' '}
        ({form.email})
      </p>
    </div>
  )
}

export default FormObject