import React from 'react'

const Square = ({value}) => {
  return (
    <React.Fragment>
        <button style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        margin: '5px',
        cursor: 'pointer'
      }} className='square'>{value}</button>
    </React.Fragment>
  )
}

export default Square