import React, { useState } from 'react'
import './MyTodo.css'

const Task = ({todo, onEditTodo, onDeleteTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if(isEditing){
        todoContent = (
            <React.Fragment>
                <input value={todo.title} onChange={(e) => {onEditTodo({...todo, title:e.target.value})}} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </React.Fragment>
        )
    }else{
        todoContent = (
            <React.Fragment>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </React.Fragment>
        )
    }
  return (
    <div>
        {todoContent}
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Task