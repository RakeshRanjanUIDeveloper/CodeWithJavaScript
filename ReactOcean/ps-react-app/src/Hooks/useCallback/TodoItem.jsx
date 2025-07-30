import React from 'react'

const TodoItem = React.memo(({todo, onDone}) => {
    console.log('Rendering:', todo.text);
  return (
    <div>
        {todo.text}
        <button onClick={() => onDone(todo.id)}>Done</button>
    </div>
  )

})

export default TodoItem