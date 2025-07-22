import React from 'react'

const ImageCaption = ({imageLink, caption}) => {
  return (
    <div >
        <figure>
            <img src={imageLink} style={{width:'50%', height:'200px'}} />
            <figcaption>{caption}</figcaption>
        </figure>
    </div>
  )
}

export default ImageCaption