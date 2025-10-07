import React from 'react'
import Accordion from '../../components/productListingApp/Accordion.jsx'
import ProductCard from '../../components/productListingApp/ProductCard.jsx'
import '../productListingApp/Styles/Products.css'
const ProductListingApp = () => {
    return (
        <div className='product-wrapper'>
            <div className='product-filter'>
                <Accordion />
            </div>
            <div className='product-display'>
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductListingApp