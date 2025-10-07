import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Dashboard = () => {
    const { isLoggedIn } = useContext(UserContext)
    return (
        <div className='dashboard'>
            <h2>{
                isLoggedIn ? 'This is Your Dashboard' : 'Please login to access your dashboard'
            }</h2>
        </div>
    )
}

export default Dashboard