import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [searchText, setSearchText] = useState('');
    const [count, setCount] = useState(0)
    const users = [
        "rakesh", "rajesh", 'raju', 'ranu', 'rajat', 'amit', 'arun'
    ]

    const filteredUsers = useMemo(()=>{
        console.log("Filtering users")

        return users.filter((user) => user.toLowerCase().includes(searchText.toLowerCase()))
    }, [searchText])
  return (
    <React.Fragment>
    <h2>Count - {count}</h2>
        <input type='text' onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Re-render</button>
        <ul>
            {
                filteredUsers.map((u, i) =>(
                    <li key={i}>{u}</li>
                ))
            }
        </ul>
    </React.Fragment>
  )
}

export default UseMemo