import React, { useEffect, useState } from 'react'
import { fakeProductFetch } from './api/fakeProductFetch'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() =>{
        fakeProductFetch('https://example.com/api/products')
            .then((res) =>{
                setAllProducts(res.data.products);
                setFilteredProducts(res.data.products);
            })
            .catch((err) =>{
                setError(err.message)
            })
    }, [])

    const filteredQuantityProducts = allProducts.filter((p) => p.quantity> 20);
    const handleProduct = () =>{
        setFilteredProducts(filteredQuantityProducts)
    }
    const filteredPriceProducts = allProducts.filter((p) => p.price<100);
    const handlePrice = () =>{
        setFilteredProducts(filteredPriceProducts)
    }
  return (
    <div>
        <ol>
            {
                filteredProducts.map((p, index) => (
                    <li key={index}>{p.name} - {p.price} - {p.quantity}</li>
                ))
            }
        </ol>
        <button onClick={handleProduct}>Show Products with Quantity more than 20</button>
        <button onClick={handlePrice}>Display only the items with price less than 100</button>
    </div>
  )
}

export default Products