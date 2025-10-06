import React, { useEffect, useState } from 'react'

const FindBy = () => {
    const [data, setData] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setData(true)
        }, 2000);
    })
  return (
    <div>
        <h2>FindBy</h2>
        
        {
            data ? <h1>Data Found</h1> : <h1>No data found</h1>
        }
        <div>Within check
            <p>Hi</p>
        </div>
    </div>
  )
}

export default FindBy