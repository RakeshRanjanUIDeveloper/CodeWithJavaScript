import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../API/Api';

const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div>
      <ul className='section-accordion'>
        {posts.map((curElm) => {
          const { id, title, body } = curElm;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchOld;
