import React, { useState } from 'react'
import './MyTodo.css'

//Add To do
const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    return (
        <React.Fragment>
            <input type='text' placeholder='add todo' value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => { onAddTodo(title); setTitle('');}}>Add</button>
        </React.Fragment>
    )
}

export default AddTodo