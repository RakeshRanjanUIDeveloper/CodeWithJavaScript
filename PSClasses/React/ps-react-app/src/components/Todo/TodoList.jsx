import React, { useContext, useState } from 'react'
import DropDown from './DropDown'
import { TodoContext } from './TodoContext'
import Search from './Search'
import Checkbox from './Checkbox'

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  const [searchText, setSearchText] = useState('');
  const [selectedPriorities, setSelectedPriorities] = useState([])

  const statusOptions = ['Backlog', 'In Progress', 'Completed'];
  const priorityOptions = ['P1', 'P2', 'P3'];
  

  //Filter Todos
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesPriority = selectedPriorities.length === 0 || selectedPriorities.includes(todo.priority);
    return matchesSearch && matchesPriority
  });

  const backlogTodos = filteredTodos.filter((todo) => todo.status === 'Backlog');
  const inProgressTodos = filteredTodos.filter((todo) => todo.status === 'In Progress');
  const completedTodos = filteredTodos.filter((todo) => todo.status === 'Completed')

  const renderTodoCard = (todo) => (
    <div className='todo-card' key={todo.id}>
      <h2 className='todo-title'>{todo.title}</h2>
      <DropDown todo={todo} options={statusOptions} type="status" />
      <DropDown todo={todo} options={priorityOptions} type="priority" />
    </div>
  )

  return (
    <React.Fragment>
      <div className='header'>
        <h2 className='heading'>My Task Board</h2>
        <div className='header-controls'>
            <Search searchText={searchText} setSearchText={setSearchText} />
            <Checkbox options={priorityOptions} onChange={setSelectedPriorities} selectedValues={selectedPriorities} />
        </div>
      </div>
      <div className='todo-container'>
        <div className='column'>
          <h3>Backlog</h3>
          {backlogTodos.map(renderTodoCard)}
        </div>
        <div className='column'>
          <h3>In Progress</h3>
          {inProgressTodos.map(renderTodoCard)}
        </div>
        <div className='column'>
          <h3>Completed</h3>
          {completedTodos.map(renderTodoCard)}
        </div>
      </div>
    </React.Fragment>
  )
}

export default TodoList