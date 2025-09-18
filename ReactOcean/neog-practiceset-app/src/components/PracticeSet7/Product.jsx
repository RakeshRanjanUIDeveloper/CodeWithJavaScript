import React, { useEffect, useState } from 'react'
import { fakeProductFetch } from './api/fakeProductFetch'

const Product = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        fakeProductFetch('https://example.com/api/products')
        .then((res) =>{
            setAllProducts(res.data.products)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }, [])
  return (
    <React.Fragment>
        <h2>Products List</h2>
        <ul>
            {allProducts.map((p) =>(
                <li>{p.name} - {p.description} - {p.price} - {p.quantity}</li>
            ))}
        </ul>
    </React.Fragment>
  )
}

export default Product