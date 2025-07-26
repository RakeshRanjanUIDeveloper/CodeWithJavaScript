import React from 'react'

const Image = ({imageDetails}) => {
  return (
    <div>
        <img src={imageDetails.url} height={imageDetails.height} width={imageDetails.width} />
    </div>
  )
}

export default Image