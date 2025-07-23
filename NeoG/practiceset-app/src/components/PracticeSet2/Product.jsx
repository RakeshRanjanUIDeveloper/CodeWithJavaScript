import React from 'react'

const Product = ({pName, pPrice}) => {
  return (
    <div>
        <h2 style={{fontWeight: 'bold', color:'blue'}}>{pName}</h2>
        <h2 style={{fontFamily:'italic', color:'green'}}>{pPrice}</h2>
    </div>
  )
}

export default Product