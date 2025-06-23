import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id} = useParams(); 
  return (
    <h2>Product Details for id - {id}</h2>
  )
}

export default ProductDetails