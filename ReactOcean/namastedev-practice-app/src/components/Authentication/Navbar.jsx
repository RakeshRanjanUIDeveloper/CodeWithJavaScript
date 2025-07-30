import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Navbar = () => {
  const {isLoggedIn, handleLogin, handleLogout} = useContext(UserContext)
  return (
    <div className='nav'>
        <h1>
            {
               isLoggedIn ? 'Welcome User!!' : '' 
            }
        </h1>
        <button >
           {
            isLoggedIn ? <span onClick={handleLogout}>Logout</span> : <span onClick={handleLogin}>Login</span> 
           }
        </button>
    </div>
  )
}

export default Navbar