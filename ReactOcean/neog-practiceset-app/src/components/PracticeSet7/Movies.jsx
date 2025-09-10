import React, { useEffect, useState } from 'react'
import { fakeMoviesFetch } from './api/fakeMoviesFetch'

const Movies = () => {
    const [moviesDetails, setMoviesDetails] = useState([]);
    useEffect(()=>{
        fakeMoviesFetch('https://example.com/api/movies')
        .then((res)=>{
            setMoviesDetails(res.data)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    },[])
  return (
    <React.Fragment>
        <h3>Movies</h3>
        <div>
            <label>Filter By Year : </label>
            <select>
                <option>All</option>
                {
                  moviesDetails.map((m) =>(
                    <option>{m.year}</option>
                  )) 
                }
            </select>
        </div>
    </React.Fragment>
  )
}

export default Movies