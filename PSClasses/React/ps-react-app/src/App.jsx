import React from 'react';
import './App.css'
import Clock from './components/Clock/Clock';
import Timer from './components/Timer/Timer';
import TodoList from './components/Todo/TodoList';
import UserPosts from './components/UserPosts/UserPosts';
import TempCalculator from './components/StateLifting/TempCalculator';
import Accordion from './components/Accordion/Accordion';
import Chips from './components/Chips/Chips';
import UseState from './Hooks/UseState';
import MyTodo from './components/Curd/MyTodo';
function App() {
  return (
   /*  <TodoList /> */
    <React.Fragment>
        {/* <Timer />
        <Clock /> 
       
        <TempCalculator />
        <Accordion />
         <UserPosts />
         <Chips />
         <UseState />*/}
         <MyTodo />
    </React.Fragment>
  )
}

export default App
