import React, { useState } from 'react'

const Button = () => {
    const [data, setData] = useState('')
  return (
    <div>
        <h2>Test Click Event With Button</h2>
        <button onClick={() => setData("Updated Data!!")}>Update Data</button>
        <h1>{data}</h1>
    </div>
  )
}

export default Button