import React, { useState } from "react";

const Vegetables = () => {
    const [highlightVegetables, setHighlightVegetables] = useState(false);
  const vegetables = [
    {
      id: 1,
      name: "Carrots",
      pickDate: "2023-03-25",
    },
    {
      id: 2,
      name: "Broccoli",
      pickDate: "2023-03-30",
    },
    {
      id: 3,
      name: "Peppers",
      pickDate: "2023-03-25",
    },
    {
      id: 4,
      name: "Tomatoes",
      pickDate: "2023-03-27",
    },
    {
      id: 5,
      name: "Ladies Finger",
      pickDate: "2023-03-30",
    },
  ];

  const handleFreshVegetables = () =>{
    setHighlightVegetables(true)
  }
  return(
    <div>
        <ol>
            {
                vegetables.map((v) =>(
                    <li key={v.id} style={highlightVegetables && v.pickDate === '2023-03-30' ? {color:'green'} : {}}>{v.name} - {v.pickDate}</li>
                ))
            }
        </ol>
        <button onClick={handleFreshVegetables}>Highlight Fresh Vegetables</button>
    </div>
  )
};

export default Vegetables;
