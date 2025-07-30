import React, { useState } from 'react'
import './Tabs.css'
const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabs = (selectedTab) => {
    console.log(selectedTab);
    setActiveIndex(selectedTab)
  }
  if(tabs.length === 0){
    return <div>No Tabs available</div>
  }
  return (
    <div className='tabs-container'>
      {
        tabs.map((tab, index) => (
          <div className='tab' key={index}>
            <div className='tab-title' onClick={() => handleTabs(index)}>
              <h2>{tab.title}</h2>
            </div>
            { activeIndex === index && 
              <div className='tab-content'>
                <p >{tab.content}</p>
              </div>
            }


          </div>
        ))
      }
    </div>
  )
}

export default Tabs