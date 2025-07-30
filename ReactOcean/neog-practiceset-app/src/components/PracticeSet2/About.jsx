import React, { useState } from 'react'

const About = ({heading, name, learning}) => {
    const [showStatus, setShowStatus] = useState(false);

    const handleMore = () =>{
        setShowStatus(true)
    }
  return (
    <div>
        <h1>{heading}</h1>
        <h2>{name}</h2>
        <button onClick={handleMore}>Know More</button>
        <p>{showStatus && learning}</p>
    </div>
  )
}

export default About