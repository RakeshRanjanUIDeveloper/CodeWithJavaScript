import React, { useEffect, useState } from 'react'
import { fakeFetch } from './api/fakeFetch'
const UsersStatus = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fakeFetch('https://example.com/api/users/status')
            .then((res) =>{
                setUsers(res.data.users);
                setLoading(false)
            })
            .catch((err)=>{
                setError(err.message);
                setLoading(false)
            })  
    }, [])
  return (
    <div>
        <h2>User Status</h2>
        {loading && <p>Loading users...</p>}
        {error && <p style={{color:'red'}}>{error}</p>}
        <ul>
            {
                users.map((user, index) =>{
                  return  <li key={index} style={{color: user.status === 'Online' ? 'green' : 'red'}}>{user.name} - {user.status}</li>
                })
            }
        </ul>
    </div>
  )
}

export default UsersStatus