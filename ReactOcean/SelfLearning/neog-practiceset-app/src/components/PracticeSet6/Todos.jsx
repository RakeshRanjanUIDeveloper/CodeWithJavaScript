import React, { useEffect, useState } from 'react'
import { fakeTodoFetch } from './api/fakeTodoFetch';

const Todos = () => {
    const [allTodos, setAllTodos] =useState([]);
    useEffect(()=>{
        fakeTodoFetch('https://example.com/api/todos')
          .then((res) =>{
              setAllTodos(res.data.todos)
          })
          .catch((err) =>{
            console.log(err.message);
          })
    },[])
  return (
    <React.Fragment>
        {
          allTodos.map((todo) => (
            <div className="todo-title" key={todo.title}>
                <h2>{todo.title}</h2>
                  <ul>
                    {
                    todo.todos.map((t, index) =>(
                      <li key={index}>{t}</li>
                    ))
                  }
                  </ul>
            </div>
          ))
        }
    </React.Fragment>
  )
}

export default Todos