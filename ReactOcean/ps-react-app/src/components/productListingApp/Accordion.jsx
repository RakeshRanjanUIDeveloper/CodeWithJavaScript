import React, { useState } from 'react'
import Categories from '../productListingApp/Categories.jsx';
import Prices from '../productListingApp/Prices.jsx';

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showContent, setShowContent] = useState(false);
    const accordionData = [
        {
            title: 'All Categories',
            content : <Categories />
        },
        {
            title: 'Prices',
            content : <Prices />
        },
        {
            title: 'Rating',
            content : ''
        }
    ];

    const handleAccordion = (e) =>{
        console.log(e)
        setShowContent(true)

    }
  return (
    <div className='accrodion-wrapper'>
        <div className='accordion-container'>
            {
                accordionData.map((a, index) => (
                    <div className='accordion-item' key={index} onClick={(e) => handleAccordion(e)}>
                        <div className='accordion-title'>
                            {a.title}
                        </div>
                        <div className='accordion-content'>
                            {a.content}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Accordion