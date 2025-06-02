import React, { useCallback, useState } from 'react'
import TodoItem from './TodoItem'

const TodoLists = () => {
    const [todos, setTodos] = useState([
        {id:1, text:'Learn React'},
        {id:2, text:'Use useCallback'}
    ])

    const handleDone = useCallback((id) =>{
        setTodos(todos => todos.filter((todo) => todo.id !== id))
    }, [])
  return (
    <div>
        <h2>Example of useCallback</h2>
        {
            todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDone={handleDone} />
            ))
        }
    </div>

  )
}

export default TodoLists