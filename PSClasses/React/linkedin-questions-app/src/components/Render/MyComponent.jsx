import React, { useEffect } from 'react'

const MyComponent = () => {
    useEffect(()=>{
        myMethod();
    }, [])
    const myMethod = () =>{
        console.log("Component mounted. Method called.")
    }
  return (
    <div>MyComponent</div>
  )
}

export default MyComponent