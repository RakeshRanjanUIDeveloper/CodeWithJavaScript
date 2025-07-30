import React, { useState } from 'react'

const Square = ({value, onSquareClick}) => {
  return (
    <React.Fragment>
        <button style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        margin: '5px',
        cursor: 'pointer'
      }} className='square' onClick={onSquareClick}>{value}</button>
    </React.Fragment>
  )
}

export default Square