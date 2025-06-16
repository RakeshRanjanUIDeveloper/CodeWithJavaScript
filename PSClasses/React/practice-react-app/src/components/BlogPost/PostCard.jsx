import React from 'react'
import './BlogPost.css'
const PostCard = ({ title, body, tags, reactions, views }) => {

    return (
            <div className='blog-card'>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className='tags'>
                    {tags.map((tag, index) => (
                        <span key={index}>#{tag} </span>
                    ))}
                </div>
                <div className='reactions'>
                    👍 {reactions.likes} | 👎 {reactions.dislikes} | 👁️ {views}
                </div>
            </div>
    )
}

export default PostCard