import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState([]);
        useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let result = await response.json();
        setData(result)
    }
console.log(data)
  return (
    <div>
        <h2>List of Users</h2>
       <ul>
             {
            data.map((item)=>(
                <li key={item.name}>{item.name}</li>
            ))
        }
       </ul>
    </div>
  )
}

export default Api