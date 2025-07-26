import React, { useState } from 'react'

const FruitsVegetables = () => {
    
    const itemList = [
 { id: 1, name: "Apple", category: "Fruit" },
 { id: 2, name: "Carrot", category: "Vegetable" },
 { id: 3, name: "Banana", category: "Fruit" },
 { id: 4, name: "Broccoli", category: "Vegetable" },
];
const [allItems, setAllItems] = useState(itemList);


// const onlyFruits = itemList.filter((i) => i.category === 'Fruit');
// const onlyVegetables = itemList.filter((i) => i.category === 'Vegetable');

const handleShow = (cat) =>{
    if(cat === 'All'){
        setAllItems(itemList)
    }
    // else if(cat === 'Fruit'){
    //     setAllItems(onlyFruits)
    // }
    // else if(cat === 'Vegetable'){
    //     setAllItems(onlyVegetables)
    // }
    else{
        setAllItems(itemList.filter((i) => i.category === cat))
    }
}

  return (
    <div>
        <button onClick={() => handleShow('All')}>All</button>
        <button onClick={() => handleShow('Fruit')}>Fruits</button>
        <button onClick={() => handleShow('Vegetable')}>Vegetables</button>
        <ol>
            {
                allItems.map((i)=>(
                    <li key={i.id} style={i.category=== 'Fruit' ? {color:'orange'} :{color:'green'}}>{i.name}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default FruitsVegetables