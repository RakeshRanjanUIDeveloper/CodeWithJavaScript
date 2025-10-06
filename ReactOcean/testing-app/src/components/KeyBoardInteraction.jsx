import React, { useState } from 'react'

const KeyBoardInteraction = () => {
    const [name, setName] = useState("")
  return (
    <div>
        <h2>KeyBoardInteraction</h2>
        <p>{name}</p>
        <input type='text' placeholder='enter name' onChange={(e)=> setName(e.target.value)} />
    </div>
  )
}

export default KeyBoardInteraction