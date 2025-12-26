import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchIndvPost } from '../../API/Api'
import { useNavigate, useParams } from 'react-router-dom'

const FetchIndv = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data, isLoading, isError, error} = useQuery({
        queryKey :["post", id],
        queryFn: () => fetchIndvPost(id)
    })

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Error: {error.message}</h2>;

  return (

      <div className="section-accordion">
        <h1>Post ID Number - {data.id}</h1>
        <div>
            <p>ID: {data.id}</p>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
        </div>
            <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
  )
}

export default FetchIndv