import React, { useContext } from 'react'
import { ProductContext } from './ProductContext';

const Categories = () => {
 const {categoriesList, handleCategoryChange, selectedCheckbox} = useContext(ProductContext);
  return (
    <React.Fragment>
        <div className='categories-lists'>
            {
                categoriesList.map((c) => (
                    <div className='category-list' key={c}  >
                        <input type='checkbox' onChange={() => handleCategoryChange(c)} checked={selectedCheckbox.includes(c)} />
                        <div className='category-title'>{c}</div>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Categories