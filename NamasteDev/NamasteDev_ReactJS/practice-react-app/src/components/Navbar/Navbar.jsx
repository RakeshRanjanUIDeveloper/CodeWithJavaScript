import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className='navbar'>
                <NavLink to='/' className='nav-item'>Home</NavLink>
                <NavLink to='/about' className='nav-item'>About</NavLink>
            </nav>

        </React.Fragment>
    )
}

export default Navbar