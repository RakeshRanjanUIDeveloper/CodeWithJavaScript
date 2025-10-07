import React, { useContext } from 'react'
import { ProductContext } from '../productListingApp/ProductContext'

const ProductPagination = () => {
    const {productList, currentPage, setCurrentPage} = useContext(ProductContext);
    const totalPages = Math.ceil(productList.length/5)

    const handleClick = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    const handlePrev = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNext = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage +1)
        }
    }
   return (
    <React.Fragment>
        <span onClick={handlePrev} className={currentPage > 1 ? '' : 'pagination_disabled'}>Prev</span>
            {
                [...Array(totalPages)].map((_, i) => {
                    return <span className={currentPage=== i+1 ? 'pagination_selected' : ''} onClick={() => handleClick(i+1)}>{i+1}</span>
                })
            }
        <span className={currentPage < totalPages ? '' : 'pagination_disabled'} onClick={handleNext}>Next</span>
    </React.Fragment>
  )
}

export default ProductPagination