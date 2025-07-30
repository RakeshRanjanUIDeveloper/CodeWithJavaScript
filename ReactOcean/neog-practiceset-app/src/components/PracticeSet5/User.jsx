import React, { useEffect, useState } from 'react'
import { fakeUserFetch } from './api/fakeUserFetch'

const User = ({imgHeading, imgHeight, imgWidth}) => {
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() =>{
        fakeUserFetch('https://example.com/api/user')
            .then((res) =>{
                setUserDetails(res.data)
            })
    }, [])
  return (
    <div>
        <h2>{imgHeading}</h2>
        <img src={userDetails.image} style={{height:imgHeight, width:imgWidth}} />
        <h3>Name : {userDetails.name}</h3>
        <h3>Likes : {userDetails.likes}</h3>
        <h3>Comments : {userDetails.comments}</h3>
    </div>
  )
}

export default User