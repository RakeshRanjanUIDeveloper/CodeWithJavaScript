import React from 'react'

const Phones = ({phoneProducts}) => {
    const mobilePhones = phoneProducts.filter((p) => p.name==='mobile');
  return (
    <ul>
        {
            mobilePhones.map((m) => (
                <li key={m.price}>{m.name} - {m.description} - {m.price}</li>
            ))
        }
    </ul>
  )
}

export default Phones