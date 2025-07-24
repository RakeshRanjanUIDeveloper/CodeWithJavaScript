import React, { useState } from 'react'

const Article = ({title, content}) => {
    const [showContent, setShowContent] = useState(false);
    const handleContent = () =>{
        setShowContent(true)
    }
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={handleContent}>Know More</button>
        <p>{showContent && content}</p>
    </div>
  )
}

export default Article