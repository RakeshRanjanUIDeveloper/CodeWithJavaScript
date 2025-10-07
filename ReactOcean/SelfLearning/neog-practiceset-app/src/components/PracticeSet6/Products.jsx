import React, { useEffect, useState } from 'react'
import { fakeProductsFetch } from './api/fakeProductsFetch'

const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const [selectedButton, setSelectedButton] = useState(0);
    useEffect(() =>{
        fakeProductsFetch('https://example.com/api/products')
        .then((res) =>{
            setAllProducts(res.data.products);
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }, [])
  return (
    <div>
        {
            allProducts.map((p, index) =>(
                <button key={index} onClick={() => setSelectedButton(index)} style={{color : index === selectedButton ? 'red' : 'black'}}>Show {p.name}</button>
            ))
        }
        {
            allProducts.length > 0 && (
                <div className='product'>
                    <img src={allProducts[selectedButton].src} />
                    <p>{allProducts[selectedButton].name}</p>
                    <p>{allProducts[selectedButton].price}</p>
                    <p>{allProducts[selectedButton].desc}</p>
                </div> 
            )
        }
    </div>
  )
}

export default Products