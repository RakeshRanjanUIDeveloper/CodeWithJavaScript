import React, { useContext } from 'react'
import { ProductContext } from '../productListingApp/ProductContext';

const Categories = () => {
 const {categoriesList, handleCategoryChange, selectedCheckbox} = useContext(ProductContext);
  return (
    <React.Fragment>
        <div className='categories-lists'>
            {
                categoriesList.map((c) => (
                    <div className='category-list' key={c}  >
                        <input type='checkbox' value={c} onChange={(c) => handleCategoryChange(c)} checked={selectedCheckbox.includes(c)} />
                        <div className='category-title'>{c}</div>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Categories