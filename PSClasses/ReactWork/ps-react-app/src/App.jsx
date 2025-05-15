import React from 'react';
import './App.css'
import Clock from './components/Clock/Clock';
import Timer from './components/Timer/Timer';
import TodoList from './components/TodoList';
function App() {
  return (
    /* <TodoList /> */
    <React.Fragment>
          <Timer />
          <Clock />
    </React.Fragment>
  )
}

export default App
