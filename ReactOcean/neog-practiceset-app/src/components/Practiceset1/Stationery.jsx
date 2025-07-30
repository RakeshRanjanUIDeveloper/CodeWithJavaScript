import React from 'react'

const Stationery = ({stationeryItems, header}) => {
  return (
    <div>
        <h2>{header}</h2>
        <ul>
            {
                stationeryItems.map((s) => (
                    <li key={s}>{s}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Stationery