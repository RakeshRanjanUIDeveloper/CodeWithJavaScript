import React, { useState } from 'react'

const UserEvent = () => {
    const [data, setData] = useState("")
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={() => setData("Hello")}>Click Me</button>
    </div>
  )
}

export default UserEvent