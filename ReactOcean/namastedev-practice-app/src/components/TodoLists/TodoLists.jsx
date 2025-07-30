import React, { useState } from 'react'
import './TodoLists.css'
const TodoLists = () => {
  const [inputValue, setInputValue] = useState('');
  const [allTodos, setAllTodos] = useState([]);

  const handleAdd = () =>{
     if (!inputValue.trim()) return;
    const newTodo ={
      id:Date.now(),
      text:inputValue,
      completed:false
    }
    setAllTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue('')
  }

  const handleDelete = (selectedItem) =>{
    setAllTodos(allTodos.filter((todo) => todo.id !== selectedItem))
  }

  const handleCheckbox  = (selectedItem) =>{
    setAllTodos((prevTodos) => prevTodos.map((todo) => todo.id === selectedItem ? {...todo, completed: !todo.completed} : todo ))
  }
  return (
    <React.Fragment>
      <input type='text' placeholder='add todo' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
          allTodos.map((todo) => <li key={todo.id}>
            <input type='checkbox' checked={todo.completed} onChange={() => handleCheckbox(todo.id)} />
            <span className={todo.completed ? 'completed' : 'inprogress'}>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>)
        }
      </ul>
    </React.Fragment>
  )
}

export default TodoLists