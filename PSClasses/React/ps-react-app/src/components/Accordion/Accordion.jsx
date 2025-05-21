import React, { useEffect, useState } from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import './Accordion.css'
const Accordion = () => {
    const [posts, setPosts] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) =>{
      // setOpenIndex(index)
        setOpenIndex(openIndex === index ? null : index)
    }
    useEffect(() => {
        const fetchPostsData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const postsData = await response.json()
                setPosts(postsData.slice(0, 5));
            } catch (error) {
                console.log(error);
            }
        }
        fetchPostsData()
    }, [])

    return (
        <div className='accordion'>
            {
                posts.map((item, index) => (
                    <div className='accordion-item' key={index} onClick={() => handleToggle(index)}>
                        <div className='accordion-header'>
                            Title - {item.title}
                            { openIndex === index ? <FaChevronUp className='arrow-icon' />  : <FaChevronDown className='arrow-icon' /> }
                        </div>
                        {
                            openIndex === index &&
                            <div className='accordion-content'>
                                Content - {item.body}
                            </div>
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default Accordion