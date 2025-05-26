import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductSearch from './ProductSearch';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        const fetchProductData = async () =>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setAllProducts(data);
        }
        fetchProductData()
    }, [])
  return (
   <React.Fragment>
        <ProductCard allProducts={allProducts} />
   </React.Fragment>
  )
}

export default Products