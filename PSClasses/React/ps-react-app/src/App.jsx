import React from 'react';
import './App.css'
import Clock from './components/Clock/Clock';
import Timer from './components/Timer/Timer';
import TodoList from './components/Todo/TodoList';
import UserPosts from './components/UserPosts/UserPosts';
import TempCalculator from './components/StateLifting/TempCalculator';
import Accordion from './components/Accordion/Accordion';
function App() {
  return (
   /*  <TodoList /> */
    <React.Fragment>
        {/* <Timer />
        <Clock /> 
       
        <TempCalculator />
        <Accordion />*/}
         <UserPosts />
    </React.Fragment>
  )
}

export default App
