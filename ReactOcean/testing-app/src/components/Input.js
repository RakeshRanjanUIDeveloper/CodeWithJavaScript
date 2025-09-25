import React, {useState} from 'react'

const Input = () => {
      const [data, setData] = useState('');

  return (
    <div>  
      <input type='text' aria-label="dynamic-input"  value={data} onChange={(e) => setData(e.target.value)} />
    </div>
  )
}

export default Input