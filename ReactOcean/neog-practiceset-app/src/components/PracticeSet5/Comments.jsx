import React, { useEffect, useState } from 'react'
import { fakeCommentFetch } from './api/fakeCommentFetch';

const Comments = () => {
    const [allComments, setAllComments] = useState([]);
    useEffect(() =>{
        fakeCommentFetch('https://example.com/api/comments')
        .then((res) =>{
            setAllComments(res.data.comments)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }, [])

    const handleDelete = (commentId) =>{
      const filteredComments = allComments.filter((_, index) => index !== commentId);
      setAllComments(filteredComments)
    }
  return (
    <div>
        <h2>Comments</h2>
        {
            allComments.map((c, index) =>(
                <div key={index}>
                    <h2>{c.name}</h2>
                    <h2>{c.text}</h2>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Comments