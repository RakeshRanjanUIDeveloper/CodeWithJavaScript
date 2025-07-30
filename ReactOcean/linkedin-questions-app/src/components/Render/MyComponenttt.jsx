import React, { useEffect, useState } from 'react'

const MyComponenttt = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log("Count updated:", count);
        yourFunction();
    }, [count])

    const yourFunction = () =>{
        console.log("I am getting called immediately after state is updated or component is re-rendered")
    }
    const handleCount = () =>{
        setCount((prevCount) => prevCount +1)
    }
  return (
    <React.Fragment>
        {count}
        <button onClick={handleCount}>Click Me</button>
    </React.Fragment>
  )
}

export default MyComponenttt