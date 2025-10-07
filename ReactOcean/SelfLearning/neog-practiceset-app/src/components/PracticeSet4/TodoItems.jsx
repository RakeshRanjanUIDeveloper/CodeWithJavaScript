import React, { useState } from 'react'

const TodoItems = ({todoItems}) => {
    const [allTodos, setAllTodos] = useState(todoItems)
    const handleDelete = (todoId) =>{
        setAllTodos(allTodos.filter((todo) => todo.id !== todoId))
    }
  return (
    <div>
        <ol>
            {
                allTodos.map((todo) =>(
                    <li key={todo.id} style={todo.isDone === true ? {textDecorationLine:'line-through'} : {}}>{todo.task} 
                        <span style={{marginLeft:'20px', fontWeight:'bold'}} onClick={() => handleDelete(todo.id)}>- X</span>
                    </li>
                ))
            }
        </ol>
    </div>
  )
}

export default TodoItems