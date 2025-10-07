import React, { useEffect, useState } from 'react'

const CleanUpFunction = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() =>{
        const handleWidth = () =>{
            setWidth(window.innerWidth);
            console.log(width)
        }

        window.addEventListener('resize', handleWidth);

        return() =>{
            window.removeEventListener('resize', handleWidth);
            console.log('cleanup function called')
        }
    })
  return (
    <div>CleanUpFunction 
        <h2>Window width: {width}px</h2>
    </div>
  )
}

export default CleanUpFunction