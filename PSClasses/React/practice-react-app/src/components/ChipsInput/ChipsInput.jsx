import React, { useState } from 'react'

const ChipsInput = () => {
    const [allChipsValue, setAllChipsValue] = useState([]);
    const [inputValue, setInputValue] = useState("")
    const [id, setId] = useState(0)
    const handleInputChange = (event) =>{
        setInputValue(event.target.value)
    }
    const handleKeyPress = (event) =>{
        if(event.key === "Enter" && inputValue.trim() !== ""){
            const newChip ={
                id: id,
                label:inputValue.trim()
            }
            setAllChipsValue([...allChipsValue, newChip]);
            setInputValue('');
            setId(id+1);
        }
    }

    const handleDeleteChip = (idToDelete) =>{
        setAllChipsValue(allChipsValue.filter((c) => c.id !== idToDelete))
    }
  return (
    <div className='chips-container'>
        <h2>Chips Input</h2>
        <input type='text' placeholder='Type a chip and press tag' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} />
        <div className='chips-output'>
            {
                allChipsValue.map((c) => <div className='each-chips' key={c.id}>
                    <span>{c.label}</span>
                    <button className='chips-button' onClick={() => handleDeleteChip(c.id)}>X</button>
                    </div>)
            }
        </div>
    </div>
  )
}

export default ChipsInput