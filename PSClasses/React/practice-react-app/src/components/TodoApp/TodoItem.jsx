import React from 'react'
import './Todo.css'

const TodoItem = ({onAdd, newTodo, setNewTodo, isEditing, onUpdate}) => {

    const handleAdd = () =>{
        if (newTodo.trim() === '') return;
        if(isEditing){
            onUpdate(newTodo);
        }else{
             onAdd({name:newTodo});
        }
        setNewTodo('')
    }
  return (
    <>
        <h3>{isEditing ? 'Edit Todo' : 'Add new Todo'}</h3>
        <input type='text' placeholder='Add todo...' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type='button' onClick={handleAdd}>{isEditing? 'Update' : 'Submit'}</button>
    </>
  )
}

export default TodoItem