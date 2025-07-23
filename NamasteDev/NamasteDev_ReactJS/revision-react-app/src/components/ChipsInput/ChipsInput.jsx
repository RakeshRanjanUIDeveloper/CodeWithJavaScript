import React, { useState } from 'react'
import './ChipsInput.css'
const ChipsInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [allChips, setAllChips] = useState([]);
  const handleChips = (e) =>{
      if(e.key === 'Enter' && inputValue.trim()!== ''){
        const newChip = {
          text : inputValue.trim(),
          id: Date.now(),
        }
        setAllChips((prevChips) => [...prevChips, newChip])
        setInputValue('')
      }
  }

  const handleDelete = (itemId) =>{
    const filterItems = allChips.filter((c) => c.id !== itemId )
    setAllChips(filterItems)
  }
  return (
    <div className='chips-container'>
        <div className='chips-input'>
            <input type='text' placeholder='enter yout chips input' value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleChips} />
        </div>
        <div className='chips-output'>
            {
              allChips.map((c, index) => <span key={c.id}>{c.text} - <strong onClick={() => handleDelete(c.id)}>X</strong></span>)
            } 
        </div>
    </div>
  )
}

export default ChipsInput