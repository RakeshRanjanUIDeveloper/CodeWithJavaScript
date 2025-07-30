import React, { useState } from "react";

const KeyIssue = () => {
  const [items, setItems] = useState([
    { id: 101, label: "Task A" },
    { id: 102, label: "Task B" },
    { id: 103, label: "Task C" },
  ]);

  const [checked, setChecked] = useState({});

  const togglecheck =(index) =>{
    setChecked((prev) => ({ ...prev, [index] : !prev[index]}))
  }

  const removeItem = (id) =>{
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h3>❌ Using index as key (BUGGY)</h3>
        {
            items.map((item,index) =>(
                <div key={index}>
                    <label>
                        <input type="checkbox" checked={!!checked[index]} onChange={() => togglecheck(index)} />
                        {item.label}
                    </label>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            ))
        }
    </div>
  );
};

export default KeyIssue;
