import React, { useState } from 'react'
import './DarkModeToggle.css'
const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const handleToggleTheme = () =>{
        setIsDark((prev) => !prev)
    }
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'} >
        <h1>Dark Mode Toggle</h1>
        <div className='toggle-container'>
            <label className='switch' >
                <input type='checkbox' checked={isDark} onClick={handleToggleTheme}/>
                <span className='slider round'></span>
            </label>
            <span className="mode-text">
                {
                    isDark ? 'Dark Mode' : 'Light Mode'
                }
            </span>
        </div>
    </div>
  )
}

export default DarkModeToggle