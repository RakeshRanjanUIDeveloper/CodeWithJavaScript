import React from 'react'
import Task from './Task'
import './MyTodo.css'

const TaskList = ({todos, onEditTodo, onDeleteTodo}) => {
  return (
    <div>
        <ul>
            {
                todos.map((todo) =>(
                    <li key={todo.id}>
                        <Task todo={todo} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo} />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TaskList