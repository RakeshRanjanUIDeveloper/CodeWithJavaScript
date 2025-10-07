import React from 'react'

const Todo = ({todoItems}) => {
  return (
    <div>
        {
            todoItems.map((todo) =>(
                <div key={todo.id} style={todo.isCompleted === true ? {color:'green'} : {color:'red'}}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Todo