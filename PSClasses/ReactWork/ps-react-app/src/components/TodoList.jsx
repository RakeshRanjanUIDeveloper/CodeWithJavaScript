import React, { useContext } from 'react'
import DropDown from './DropDown'
import { TodoContext } from './TodoContext'

const TodoList = () => {
  const {todos} = useContext(TodoContext)
  return (
    <div className='todo-container'>
        {
            todos.map((todo) => (
                <div className='todo-card' key={todo.id}>
                    <h2 className='todo-title'>{todo.title}</h2>
                    <p className='todo-priority'></p>
                    <DropDown todo={todo} />
                </div>
            ))
        }
    </div>
  )
}

export default TodoList