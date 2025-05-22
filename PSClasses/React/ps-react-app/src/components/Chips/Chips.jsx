import React, { useState } from 'react'

const Chips = () => {
    const [chips, setChips] = useState([]);
    const [text, setText] = useState('');
  return (
    <React.Fragment>
        <h2>Chips Input</h2>
        <input type='text' value={text} onChange={handleText} onKeyDown={handleChips} />
        <div className='output'>
            {
                chips.map((chip) => (
                    <div className='chip'>{chip}</div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Chips