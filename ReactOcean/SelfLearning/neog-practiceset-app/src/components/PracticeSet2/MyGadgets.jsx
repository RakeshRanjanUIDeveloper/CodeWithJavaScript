import React, { useState } from 'react'

const MyGadgets = ({gProducts}) => {
    const [showHighlight, setShowHighlight] = useState(false);
    const handleHighlight = () =>{
        setShowHighlight(true)
    }
  return (
    <div>
        <ol>
            {
                gProducts.map((p) => (
                    <li key={p.price} style={ p.price>50000 && showHighlight ? {backgroundColor:'lightgreen'} : {}}>{p.name} - {p.description} - {p.price}</li>
                ))
            }
        </ol>
        <button onClick={handleHighlight}>Highlight Expensive Gadget</button>
    </div>
  )
}

export default MyGadgets