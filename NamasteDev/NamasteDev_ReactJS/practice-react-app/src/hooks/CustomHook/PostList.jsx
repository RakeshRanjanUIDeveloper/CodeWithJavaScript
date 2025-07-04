import React from 'react'
import useFetch from './useFetch'

const PostList = () => {
   const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts');

   if(loading) return <p>Loading posts....</p>
   if(error) return <p>Error Message - {error}</p>
  return (
    <React.Fragment>
        <h2>Post List</h2>
        <ul>
            {
                data.slice(0,5).map((p) => (
                    <li key={p.id}>
                        <strong>{p.title}</strong>
                        <p>{p.body}</p>
                    </li>
                ))
            }
        </ul>
    </React.Fragment>
  )
}

export default PostList