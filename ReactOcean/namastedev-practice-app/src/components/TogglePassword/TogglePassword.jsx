import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import './TogglePassword.css'
const TogglePassword = () => {
    const [openEye, setOpenEye] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) =>{
        setInputValue(e.target.value)
    }
    const handleEye = () =>{
        setOpenEye((prev) => !prev)
    }
  return (
    <div className='container'>
        <h1 className='title'>Toggle Password</h1>
        <div className='password-wrapper'>
            <input type={openEye ? 'text' : 'password'} placeholder='enter password' className='password-input' value={inputValue} onChange={handleInput} />
            <span className='icon' onClick={handleEye}>
                {
                    openEye ? <Eye /> : <EyeOff />
                }
            </span>
        </div>
        <div className='visibility-label'>
            {
                openEye ? 'Password Visible' : 'Password Hidden'
            }
        </div>
    </div>
  )
}

export default TogglePassword