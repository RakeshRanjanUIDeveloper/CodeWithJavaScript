import React, { useEffect, useState } from 'react'
import { fakeVideoFetch } from './api/fakeVideoFetch'

const Video = () => {
    const [allVideos, setAllVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);

    useEffect(()=>{
        fakeVideoFetch('https://example.com/api/movies')
        .then((res)=>{
            setAllVideos(res.data);
            setFilteredVideos(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    const uniqueGenre = [...new Set(allVideos.map((v) => v.genre))];

    const handleVideoChange = (e) =>{
        const selectedGenre = e.target.value;
        console.log(selectedGenre)
        if(selectedGenre === 'All'){
            setFilteredVideos(allVideos)
        }else{
            const filteredData = allVideos.filter((v) => v.genre === selectedGenre);
            setFilteredVideos(filteredData)
        }
    }
  return (
   <React.Fragment>
        <h2>Videos</h2>
        <label>Filter By Genre : </label>
        <select onChange={handleVideoChange}>
            <option value='All'>All</option>
            {
                uniqueGenre.map((g) =>(
                    <option value={g}>{g}</option>
                ))
            }
        </select>
        <div className='videos' style={{'display':'flex', 'gap' : '10px'}}>
            {
                filteredVideos.map((v) =>(
                    <div className='video' style={{'border':'1px solid red', 'textAlign':'center'}}>
                        <h3>{v.title} {v.year} {v.genre}</h3>
                    </div>
                ))
            }
        </div>
   </React.Fragment>
  )
}

export default Video