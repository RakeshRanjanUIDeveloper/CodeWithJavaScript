import React, { useState } from 'react'

const Lives = () => {
    const [liveCount, setLiveCount] = useState(3);
    const [showMessage, setShowMessage] = useState(false)
    const handleLife = () =>{
        setLiveCount(((prevCount) => prevCount -1))
        if(liveCount === 0){
            setShowMessage(true)
        }
    }
  return (
    <div>
        <h2>Current Lives : {liveCount}</h2>
        <button onClick={handleLife}>Loos a Life</button>
        {showMessage && <p>Game Over</p>}
    </div>
  )
}

export default Lives