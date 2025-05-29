import React from 'react';
import './App.css'
import Clock from './components/Clock/Clock';
import Timer from './components/Timer/Timer';
import TodoList from './components/Todo/TodoList';
import UserPosts from './components/UserPosts/UserPosts';
import TempCalculator from './components/StateLifting/TempCalculator';
import Accordion from './components/Accordion/Accordion';
import Chips from './components/Chips/Chips';
import UseState from './Hooks/UseState/UseState';
import MyTodo from './components/Curd/MyTodo';
import UseEffect from './Hooks/UseEffect/UseEffect';
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
         <MyTodo />
         <UseState />
         */}
         <UseEffect />
    </React.Fragment>
  )
}

export default App
