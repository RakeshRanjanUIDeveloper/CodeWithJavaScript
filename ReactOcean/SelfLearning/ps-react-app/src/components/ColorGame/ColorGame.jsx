import React, { useState } from 'react'
import './ColorGame.css'

const ColorGame = () => {
  const initialData = [
    { id: 1, color: 'Green' },
    { id: 2, color: 'Red' },
    { id: 3, color: 'Green' },
    { id: 4, color: 'Yellow' },
    { id: 5, color: 'Blue' },
  ];
  const [allColorData, setAllColorData] = useState(initialData);
  const [hideFirstGreen, setHideFirstGreen] = useState(false);
  const [hideAllGreen, setHideAllGreen] = useState(false);

  const handleSingleGreen = () => {
    setHideFirstGreen((prev) => !prev);
  }

  const handleAllGreen = () => {
    setHideAllGreen((prev) => !prev);
  }

  const handleReset = () =>{
      //setAllColorData(initialData);
      setHideFirstGreen(false);
      setHideAllGreen(false)
  }

  const handleBoxClick = (c) =>{
    if(c.color === 'Yellow'){
      const newId = allColorData.length+1;
      const newBox = {id:newId, color: 'Yellow'};
      setAllColorData([...allColorData, newBox])
    }

    if(c.color === 'Red'){
      const filtered = allColorData.filter((item) => item.id !== c.id);
      console.log(filtered);
      setAllColorData([c, ...filtered])
    }
  }
  const firstGreenId = allColorData.find((item) => item.color === 'Green').id;
  // const allGreenId = allColorData.filter((item) => item.color === 'Green').map((item) => item.id);

  return (
    <React.Fragment>
      <h2>Color Game</h2>
      <div className='filters'>
        <div className='filter'>
          <input type='checkbox' onChange={handleSingleGreen} checked={hideFirstGreen} />
          <label>Hide First Green Box</label>
        </div>
        <div className='filter'>
          <input type='checkbox' onChange={handleAllGreen} checked={hideAllGreen} />
          <label>Hide All Green Box</label>

        </div>
        <div className='filter'>
          <button className='reset-button' onClick={handleReset}>Reset</button>
        </div>
        <div className='filter'>
          <p>Click the red box to move it to the first position.</p>
        </div>
        <div className='filter'>
          <p>Click the yellow box to create a copy and add it to the end.</p>
        </div>
      </div>
      <div className='color-container'>
        {
          allColorData.map((c) => {
            if (hideFirstGreen && c.id === firstGreenId) return null;
            if (hideAllGreen && c.color === 'Green') return null;

            return (
              <div className='color-box' key={c.id} style={{ background: `${c.color}` }} onClick={() => handleBoxClick(c)}>
                <p>{c.color}</p>
              </div>
            )

          })
        }
      </div>
    </React.Fragment>
  )
}

export default ColorGame