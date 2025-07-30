import React, { useEffect, useState } from 'react'

const MyComponentt = () => {
    const [count, setCount] = useState(0);
    const myMethod = () =>{
        console.log("Method called on every render")
    }
    myMethod();

    useEffect(() =>{
        console.log("useEffect runs after every render")
    })
    const handleClick = () =>{
        setCount((prev) => prev+1)
    }
  return (
    <React.Fragment>
        <div>{count}</div>
    <button onClick={handleClick}>HandleClick</button>
    </React.Fragment>
  )
}

export default MyComponentt