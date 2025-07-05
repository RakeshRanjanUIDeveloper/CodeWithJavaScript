import React, { useState } from 'react'

const TodoApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [allTodos, setAllTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleSubmitTodo = () =>{
        if(editId){
            const updatedTodos = allTodos.map((todo) => todo.id === editId ? {...todo, text:inputValue} : todo);
            setAllTodos(updatedTodos);
            setEditId(null);
        }else{
            const newTodo = {
                id:Date.now(),
                text : inputValue
            }
        setAllTodos((prevTodos) => [...prevTodos, newTodo]);
        }

        setInputValue('')
    }

    const handleDeleteTodo = (deleteId) =>{
        const filteredTodo = allTodos.filter((t) => t.id !== deleteId);
        setAllTodos(filteredTodo)
    }

    const handleEditTodo = (editId) =>{
        const todoToEdit = allTodos.find((t) => t.id === editId);
        setInputValue(todoToEdit.text);
        setEditId(editId)
    }

    
  return (
    <div className='todo-container'>
        <div className='todo-input'>
            <input type='text' placeholder='add your todo...' value={inputValue} onChange={(e) =>setInputValue(e.target.value)} />
            <button onClick={handleSubmitTodo}>
                {editId ? 'Update' : 'Add'}
            </button>
        </div>
        <div className='todo-output'>
            <ul>
                {
                allTodos.map((todo) => (
                    <li key={todo.id}>{todo.text} -  
                        <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>

                ))
            }
            </ul>
        </div>
    </div>
  )
}

export default TodoApp