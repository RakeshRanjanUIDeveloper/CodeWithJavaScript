import React from 'react'

const User = (props) => {
  return (
    <div>
        <h1>Props Testing</h1>
        <p>{props.name}</p>
        <button onClick={props.testFunction}>Click</button>
    </div>
  )
}

export default User