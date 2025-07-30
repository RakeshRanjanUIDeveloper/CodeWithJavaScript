import React, { useState } from 'react'
import './Chip.css'
const Chips = () => {
    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [idCounter, setIdCounter] = useState(0);
    const handleInputChange = (event) =>{
        setInputValue(event.target.value)
    };

    const handleKeyPress = (event) => {
        if(event.key === 'Enter' && inputValue.trim() !== ""){
            const newChip = {
                id: idCounter,
                label :inputValue.trim()
            }
            setChips([...chips, newChip]);
            setIdCounter(idCounter+1)
            setInputValue("")
        }
    }

    const handleDeleteChip = (idToDelete) =>{
        setChips(chips.filter((chip) => chip.id !== idToDelete))
    }
  return (
    <React.Fragment>
        <h2>Chips Input</h2>
        <input type='text' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} />
        <div className='output'>
            {
                chips.map((chip) => (
                    <div key={chip.id} className='chip'>
                        <span>{chip.label}</span>
                        <button onClick={() => handleDeleteChip(chip.id)}>X</button>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Chips