import React, { useState } from 'react'
import handleOtherMethod from './helper';

const FunctionalComponent = () => {
    const [data, setData] = useState('');
    const handleData = () =>{
        setData("Hello");
    }

  return (
    <div>
        <h2>Functional Component Method Testing</h2>
        <button data-testid="btn1" onClick={handleData}>Update</button>
        <button onClick={handleOtherMethod}>Print</button>
        <h2>{data}</h2>
    </div>
  )
}

export default FunctionalComponent