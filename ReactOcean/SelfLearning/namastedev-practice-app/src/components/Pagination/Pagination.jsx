import React, { useEffect, useState } from 'react'
import './Pagination.css'
const Pagination = () => {
    const [allData, setAllData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchtext] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [selectedRating, setSelectedRating] = useState('');

    const fetchRecipesData = async () => {
        const response = await fetch('https://dummyjson.com/recipes');
        const jsonData = await response.json();
        console.log(jsonData)
        setAllData(jsonData.recipes);
        setFilteredData(jsonData.recipes)
    }
    useEffect(() => {
        fetchRecipesData()
    }, [])

    const totalItems = filteredData.length; //30
    const itemsPerPage = 5;
    const totalPages = Math.ceil(totalItems / itemsPerPage) //6

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1)
        }
    }
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
        }
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearchtext(searchValue)
        const filteredItems = allData.filter((r) => {
            const nameMatch = r.name.toLowerCase().includes(searchValue.toLowerCase());
            const mealTypeMatch = r.mealType.some((m) => m.toLowerCase().includes(searchValue.toLowerCase()));
            const tagsMatch = r.tags.some((t) => t.toLowerCase().includes(searchValue.toLowerCase()));
            return nameMatch || mealTypeMatch || tagsMatch

        });
        setFilteredData(filteredItems);
        setCurrentPage(1);
    }

    const handleRating = (e) => {
        const value = e.target.value;
        setSelectedRating(value)
        const filteredRatingItems = allData.filter((r) => r.rating >= value)
        setFilteredData(filteredRatingItems);
    }
    const handleSort = (e) =>{
        const value = e.target.value;
        console.log(value);
        const sorted = [...filteredData]
        if(value === 'A-Z'){
            sorted.sort((a,b) => a.name.localeCompare(b.name))
        } else if (value === 'Z-A'){
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        } else if (value === 'Rating'){
            sorted.sort((a, b) => b.rating - a.rating);
        } else if (value === 'Cooking Time'){
            sorted.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);
        }
        setFilteredData(sorted);
        setCurrentPage(1);
    }
    return (
        <React.Fragment>
            <div className='recipes-headers'>
                <div className='recipes-header'>
                    <h2>Recipes Cards with Pagination</h2>
                </div>
                <div className='recipes-right'>
                    <div className='recipes-sorting'>
                        <label>Sort by : </label>
                        <select onChange={handleSort}>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                            <option value='Rating'>Rating</option>
                            <option value='Cooking Time'>Cooking Time</option>
                        </select>
                    </div>
                    <div className='recipes-rating'>
                        <label>Filter with Rating :</label>
                        <select value={selectedRating} onChange={handleRating}>
                            <option value=''>All</option>
                            <option value='4.8'>4.8+</option>
                            <option value='4.6'>4.6+</option>
                            <option value='4.4'>4.4+</option>
                        </select>
                    </div>
                    <div className='recipes-search'>
                        <input type='text' placeholder='search your recipes' value={searchText} onChange={handleSearch} />
                    </div>
                    <div className='recipes-carousel'>
                        <button className='prev-arrow arrow' onClick={handlePrev} disabled={currentPage <= 1}>Prev</button>
                        <p>{currentPage}/{totalPages}</p>
                        <button className='next-arrow arrow' onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </div>
            </div>

            <div className='recipes-container'>
                {
                    currentData.length === 0 ? (
                        <div className='no-results'>
                            <p>No results found.</p>
                        </div>
                    ) : (
                        currentData.map((r) => (
                            <div className='recipes-card' key={r.id}>
                                <div className='recipes-image'>
                                    <img src={r.image} />
                                </div>
                                <div className='recipes-details'>
                                    <h3>{r.name}</h3>
                                    <h6>Recommended for - <strong>{r.mealType.join(", ")}</strong></h6>
                                    <p>{r.tags.join(', ')}</p>
                                    <p>Rating - {r.rating}</p>
                                    <p>Cooking Time - {r.cookTimeMinutes}Mins.</p>
                                </div>
                            </div>
                        ))
                    )
                }

            </div>
        </React.Fragment>
    )
}

export default Pagination