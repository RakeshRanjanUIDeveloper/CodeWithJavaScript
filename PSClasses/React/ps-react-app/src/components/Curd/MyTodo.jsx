import React, { useState } from 'react'
import TaskList from './TaskList';
import AddTodo from './AddTodo';
import './MyTodo.css'
const MyTodo = () => {
    const initialTodos = [
        { id: 0, title: 'Buy milk', done: true },
        { id: 1, title: 'Eat tacos', done: false },
        { id: 2, title: 'Brew tea', done: false },
    ];
    let nextId = 3;
    const [todos, setTodos] = useState(initialTodos)

    const handleAddTodo = (title) =>{
        setTodos([...todos, {
            id: nextId++,
            title: title
        }])
    }
    const handleEditTodo = (currentTodo) =>{
        console.log(currentTodo);
        setTodos(todos.map((t) => {
            console.log(t.id);
            console.log(currentTodo.id);
            if(t.id === currentTodo.id){
                return currentTodo
            }else{
                return t
            }
        }))
    }

    const handleDeleteTodo = (todoId) =>{
        setTodos(todos.filter((t) => t.id !== todoId))
    }
    return (
        <div>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList todos={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDeleteTodo} />
        </div>
    )
}

export default MyTodo