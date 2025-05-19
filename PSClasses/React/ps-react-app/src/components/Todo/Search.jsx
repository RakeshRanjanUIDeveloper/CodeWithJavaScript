import React from 'react'

const Search = ({searchText, setSearchText}) => {
    const handleSearch= (e) =>{
        setSearchText(e.target.value)
    }
  return (
    <div className='search-box'>
        <input type='text' placeholder='search your todo...' onChange={handleSearch} value={searchText} />
    </div>
  )
}

export default Search