import React, { useEffect, useState } from 'react'
import './Pagination.css'
const Pagination = () => {
    const [allData, setAllData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const fetchRecipesData = async () =>{
        const response = await fetch('https://dummyjson.com/recipes');
        const jsonData = await response.json();
        console.log(jsonData)
        setAllData(jsonData.recipes)
    }
    useEffect(() =>{
        fetchRecipesData()
    }, [])

    const totalItems = allData.length; //30
    const itemsPerPage = 5;
    const totalPages = totalItems/itemsPerPage //6
    const handleNext = () =>{
        setCurrentPage((prev) => prev +1)
    }
    const handlePrev  = () =>{
        setCurrentPage((prev) => prev - 1)
    }
  return (
    <React.Fragment>
        <div className='recipes-header'>
            <h2>Recipes Cards with Pagination </h2>
            <div className='recipes-carousel'>
                <div className='prev-arrow' onClick={handlePrev}> Prev </div>
                 <p>{currentPage}/{totalPages}</p>
                <div className='next-arrow' onClick={handleNext}> Next </div>
            </div>
        </div>
        <div className='recipes-container'>
            {
                allData.map((r) => (
                    <div className='recipes-card' key={r.id}>
                        <div className='recipes-image'>
                            <img src={r.image} />
                        </div>
                        <div className='recipes-details'>
                            <h3>{r.name}</h3>
                            <p>{r.tags.join(', ')}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Pagination