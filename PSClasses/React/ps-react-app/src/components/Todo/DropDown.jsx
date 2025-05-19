import React, { useContext } from 'react'
import { TodoContext } from './TodoContext';

const DropDown = ({todo, options, type}) => {
  const {setTodos} = useContext(TodoContext)
  const handleDropDown = (e) =>{
    const newValue = e.target.value;
    setTodos((prevTodos) => {
      return prevTodos.map((t) => t.id===todo.id ? {...t, [type]: newValue} : t)
    })
  }
  return (
    <select className="dropdown-wrapper"  value={todo[type]} onChange={handleDropDown}>
        {
            options.map((option) => (
                <option key={`${todo.id}-${type}-${option}`}  value={option}>{option}</option>
            ))
        }
    </select>
  )
}

export default DropDown