import React, { useState } from 'react'

const ColorPicker = () => {
    const [selectedHex, setSelectedHex] = useState(null);
    const colorList = [
        {color: 'red', hexValue: '#EE4B2B'},
        {color: 'blue', hexValue :'#89CFF0'},
        {color:'green', hexValue : '#7FFFD4'}
    ]
    const handleHexValue = (hexValue) =>{
        setSelectedHex(hexValue)
    
    }
  return (
    <div>
        {
            colorList.map((c) => (
                <button key={c.color} style={{backgroundColor: `${c.color}`, color:'white'}} onClick={() => handleHexValue(c.hexValue)}>
                    {selectedHex === c.hexValue ? `${c.hexValue}` : `${c.color} color`}
                </button>
            ))
        }
    </div>
  )
}

export default ColorPicker