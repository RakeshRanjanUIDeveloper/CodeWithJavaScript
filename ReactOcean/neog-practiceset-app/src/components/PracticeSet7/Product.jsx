import React, { useEffect, useState } from 'react'
import { fakeProductFetch } from './api/fakeProductFetch'

const Product = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    useEffect(() =>{
        fakeProductFetch('https://example.com/api/products')
        .then((res) =>{
            setAllProducts(res.data.products)
            setOriginalProducts(res.data.products); // store original
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }, [])

    // const handleProductSort = () =>{
    //     // spread operator 
    //     const sortedData = [...allProducts].sort((a,b) => b.price - a.price);
    //     setAllProducts(sortedData)
    // }

    const handleProductSortLowToHigh = () =>{
        const lowToHighSortedProducts = [...allProducts].sort((a,b) => a.price - b.price)
        setAllProducts(lowToHighSortedProducts)
    }
    const handleProductSortHighToLow = () =>{
        const highToLowSortedProducts = [...allProducts].sort((a,b) => b.price - a.price);
        setAllProducts(highToLowSortedProducts)
    }
    const handleProductReset = () =>{
        setAllProducts(originalProducts);
    }
  return (
    <React.Fragment>
        <h2>Products List</h2>
        {/* <button onClick={handleProductSort}>sort the products by price</button> */}
        <button onClick={handleProductSortLowToHigh}>Low to High</button>
        <button onClick={handleProductSortHighToLow}>High to Low</button>
        <button onClick={handleProductReset}>Reset</button>
        <ul>
            {allProducts.map((p) =>(
                <li>{p.name} - {p.description} - {p.price} - {p.quantity}</li>
            ))}
        </ul>
    </React.Fragment>
  )
}

export default Product