import React, { useEffect, useState } from 'react'
import { fakeStationeryFetch } from './api/fakeStationeryFetch'

const Stationery = () => {
    const [allStationeries, setAllStationeries] = useState([])
    const [sortedData, setSortedData] = useState([]);
    useEffect(()=>{
        fakeStationeryFetch('https://example.com/api/products')
        .then((res) =>{
            setAllStationeries(res.data.products)
            setSortedData(res.data.products)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    },[])

  useEffect(() => {
    if (allStationeries.length > 0) {
      const sorted = [...allStationeries].sort((a, b) => b.rating - a.rating);
      setSortedData(sorted);
    }
  }, [allStationeries]);

  const handleSearch = (e) =>{
    const searchText = e.target.value.toLowerCase();
    const filteredData = allStationeries.filter((s) => s.name.toLowerCase().includes(searchText));
    setSortedData(filteredData)
  }
  return (
    <React.Fragment>
        <h2>Stationery</h2>
        <input type='text' placeholder='search...' onChange={(e) => handleSearch(e)} />
        <div className='stationeries' style={{'display' : 'flex', 'gap':'10px'}}>
            {
                sortedData.map((s) =>(
                    <div className='stationery' key={s.name} style={{'border' : '2px solid green', 'padding':'15px'}}>
                            <p>{s.name} - <b>Price </b>{s.price} - <b>Quantity</b> {s.quantity} - <b>Rating</b> {s.rating}</p>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Stationery