import React, { useState } from 'react'
import postData from './postData.js'
import PostCard from './PostCard';
const BlogPosts = () => {
    const [allBlogPosts] = useState(postData);
    console.log(allBlogPosts);
  return (
            <div className='blog-card-container'>
                {
                    allBlogPosts.map((post) => (
                        <PostCard key={post.id} title={post.title} body={post.body} tags={post.tags} reactions={post.reactions} views={post.views}  />
                    ))
                }
            </div>
    
  )
}

export default BlogPosts