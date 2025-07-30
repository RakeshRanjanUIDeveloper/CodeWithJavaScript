import React, { useEffect, useState } from 'react'
import { fakeUsersFetch } from './api/fakeUsersFetch';

const Users = () => {
    const [loading, setLoading] = useState(true);
    const [allUsers, setAllUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fakeUsersFetch('https://example.com/api/users')
        .then((res) =>{
            setAllUsers(res.data);
            setLoading(false);
        })
        .catch((err) =>{
            setError(err.message);
            setLoading(false);
        })
    }, [])
  return (
    <div>
        <h2>Users</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <div  style={{display:'flex', gap:'20px'}}>
        {loading ? <p>Loading</p> : (
            allUsers.map((u) =>(
                <div className='user' key={u.name} style={{border:'2px solid red', padding:'20px'}}>
                    <img src={u.image} style={{width:'100px', height:'100px', margin:'0 auto', display:'block'}} />
                    <h3>{u.name}</h3>
                    <h3>Comments - {u.comments}</h3>
                    <h3>Likes - {u.likes}</h3>
                </div>
            ))
        )}
    </div>
    </div>

  )
}

export default Users