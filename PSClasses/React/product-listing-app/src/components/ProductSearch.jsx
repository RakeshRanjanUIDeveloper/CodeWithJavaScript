import React, { useState } from 'react'

const ProductSearch = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');
    const handleProductSearch = (e) =>{
        const value = e.target.value;
        setSearchText(value)
        onSearch(value.toLowerCase())
    }
  return (
    <React.Fragment>
        <input className='input-search' type='text' placeholder='search products...' onChange={(e) => handleProductSearch(e)} value={searchText} />
    </React.Fragment>
  )
}

export default ProductSearch