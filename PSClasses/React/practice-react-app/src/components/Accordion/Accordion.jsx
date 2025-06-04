import React, { useEffect, useState } from 'react'
import './Accordion.css'
const Accordion = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() =>{
        const fetchPostsData = async () =>{
            try {
               const response = await fetch('https://jsonplaceholder.typicode.com/posts');
               const data = await response.json();
               setAllPosts(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPostsData()
    }, [])

    const firstfivePosts = allPosts.slice(0,5);
    const handleAccordion = (accordionId) =>{
       if(openIndex === accordionId){
        setOpenIndex(null)
       }else{
        setOpenIndex(accordionId)
       }
    }
  return (
    <div className='accordion-container'>
        <h2>Accordion</h2> 
        {
            firstfivePosts.map((post) => (
                <div className='accordion-item' key={post.id}>
                    <div className='accordion-title' onClick={() => handleAccordion(post.id)}>
                        <p>{post.title}</p>
                    </div>

                    <div className='accordion-content'>
                        {
                           openIndex === post.id  && <p>{post.body}</p>
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Accordion