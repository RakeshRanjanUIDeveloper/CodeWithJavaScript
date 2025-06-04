import React, { useState } from 'react'
import initialTodos from './todos.json'
import TodoItem from './TodoItem'
import './Todo.css'
const TodoList = () => {
    const [allTodos, setAllTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const maxId = Math.max(...initialTodos.map((todo) => todo.id))
    let nextId = maxId+1
    const handleAddTodo = (todo) =>{
        setAllTodos((prevTodos) => [...prevTodos, {
            id:nextId++,
            name:todo.name
        }]) 
    }
    const handleDeleteTodo = (todoId) =>{
        setAllTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
    }
    const handleEditTodo = (todoId) =>{
        const todoToEdit = allTodos.find((todo) => todo.id === todoId);
        console.log(todoToEdit);
        setNewTodo(todoToEdit.name)
        setIsEditing(true)
        setEditId(todoId)
    }
    const handleUpdateTodo = (updatedName) =>{
        setAllTodos((prevTodos) => prevTodos.map((todo) => todo.id === editId ? {...todo, name:updatedName} :  todo))
        setIsEditing(false);
        setEditId(null);
        setNewTodo('');
    }
    return (
        <div className="todo-container">
            <h1 className='todo-heading'>Todo App</h1>
            <TodoItem onAdd={handleAddTodo} onUpdate={handleUpdateTodo} newTodo={newTodo} setNewTodo={setNewTodo} isEditing={isEditing} />
            <ol className='todo-items'>
                {
                    allTodos.map((todo) => (
                        <>
                            <li key={todo.id}>{todo.name}
                                <button type='button' onClick={() => handleEditTodo(todo.id)}>Edit</button>
                                <button type='button' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            </li>
                        </>
                    ))
                }
            </ol>
        </div>
    )
}

export default TodoList