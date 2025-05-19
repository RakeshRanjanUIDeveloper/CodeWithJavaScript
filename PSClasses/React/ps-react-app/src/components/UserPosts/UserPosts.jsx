import React, { useEffect, useState } from 'react'
import fakeUserFetch from './fakeUserFetch'
import { fakePostFetch } from './fakePostFetch';

const UserPosts = () => {
    const [user, setUser] = useState({});
    const [post, setPost] = useState({});
    useEffect(() =>{
        const fetchUserAndPosts = async (userId) =>{
            try {
                const userResponse = await fakeUserFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                if(userResponse.status === 200){
                    console.log(userResponse.data)
                    setUser(userResponse.data);
                }
                
                const postResponse = await fakePostFetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
                if(postResponse.status === 200){
                    console.log(postResponse.data)
                    setPost(postResponse.data)
                }

            } catch (error) {
                console.error("Error fetching :", error)
            }
        }
        fetchUserAndPosts(1)
    }, [])
  return (
    <React.Fragment>
        <h2>User Name - {user.name}</h2>
        <p>User Post - {post.title}</p>
    </React.Fragment>
  )
}

export default UserPosts