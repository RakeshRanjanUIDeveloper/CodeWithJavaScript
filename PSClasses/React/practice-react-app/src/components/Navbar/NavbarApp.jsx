import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
const NavbarApp = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className='page-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
            </BrowserRouter>


        </>
    )
}

export default NavbarApp