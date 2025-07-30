import React, { useState } from 'react'

const ContactForm = () => {
    const [form, setForm] = useState({name:'', email:'', message:''});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submittedName, setSubmittedName] = useState("");
    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const validate = () =>{
        const newErrors = {};
        if(!form.name.trim()){
            newErrors.name = "name is required"
        }
        if(!form.email.trim()){
            newErrors.email ="Email is required"
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)){
            newErrors.email ="Invalid email format"
        }
        if(!form.message.trim()){
            newErrors.message = "Message is required";
        }
        return newErrors;

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const validateErrors = validate();
        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors)
        }else{
            setSubmittedName(form.name)
            setSubmitted(true);
            setErrors({});
            setForm({name:'', email:'', message:''})
        }
    }
  return (
    <React.Fragment>
        {
            submitted ? <h2>{`Thank You, ${submittedName}`}</h2> : (
                        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name : </label>
                <input type='text' name='name' value={form.name} onChange={handleChange} />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor='email'>Email : </label>
                <input type='email' name='email' value={form.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor='message'>Message : </label>
                <textarea name='message' value={form.message} onChange={handleChange} /> 
                {errors.message && <p>{errors.message}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>
            )
        }

    </React.Fragment>
  )
}

export default ContactForm