import React from 'react'
import { UserProvider } from './UserContext'
import Navbar from './Navbar'
import Dashboard from './Dashboard'

const Authentication = () => {
  return (
    <UserProvider>
        <Navbar />
        <Dashboard />
    </UserProvider>
  )
}

export default Authentication