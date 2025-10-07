import React from 'react'

const Gadgets = ({gadgetsProducts}) => {
  return (
    <div className='gadgets-list'>
        <ol>
            {
                gadgetsProducts.map((g) => (
                    <li key={g.price} style={g.price>50000 ? {border:'1px solid red'} : {}}>{g.name} - {g.description} - {g.price}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default Gadgets