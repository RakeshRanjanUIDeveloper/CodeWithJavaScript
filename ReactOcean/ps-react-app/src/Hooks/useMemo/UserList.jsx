import React, { useEffect, useMemo, useState } from 'react'


const fetchUsers = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve([
                {id:1, name:'Rakesh'},
                {id:2, name: 'Ranjan'},
                {id:3, name:'Rajesh'},
                {id:4, name:'Arjun'},
                {id:5, name: 'Rishi'}
            ])
        },1000)
    })
}

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('')
    useEffect(() =>{
        fetchUsers().then((data) => setUsers(data));
    }, [])

    //Memoize filtered users
    const filteredUsers = useMemo(() =>{
        console.log("Filtering Users...");
        return users.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()))
    }, [users, searchText])
  return (
    <div>
        <h2>UserList with useMemo</h2>
        <input type='text' placeholder='search...'nvalue={searchText} onChange={(e) => setSearchText(e.target.value) } />
        {
            users.length === 0 ? <p>Loading Users....</p> : (
                <ul>
                    {
                        filteredUsers.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default UserList