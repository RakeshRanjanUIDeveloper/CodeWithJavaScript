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
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import ControlledInput from './components/ControlledUncontrolled/ControlledInput';
import UncontrolledInput from './components/ControlledUncontrolled/UncontrolledInput';
import ControlledForm from './components/ControlledUncontrolled/ControlledForm';
import UncontrolledForm from './components/ControlledUncontrolled/UncontrolledForm';
import ExampleUseRef from './Hooks/UseRef/ExampleUseRef';
import TicTacToe from './components/TicTacToe/TicTacToe';
import UserList from './Hooks/useMemo/UserList';
import UserListWithoutUseMemo from './Hooks/useMemo/UserListWithoutUseMemo';
import TodoLists from './Hooks/useCallback/TodoLists';

function App() {
  return (
   
    <React.Fragment>
      {/* 
    <TodoList /> 
      <Timer />
        <Clock /> 
        <TempCalculator />
        <Accordion />
         <UserPosts />
         <Chips />
         
         <UseState />
         <UseEffect />
         <DarkModeToggle />
         <ControlledInput />
         <UncontrolledInput />
         <ControlledForm />
         <UncontrolledForm />
         <ExampleUseRef />
         <MyTodo />
         <TicTacToe />
         <UserList />
         <UserListWithoutUseMemo />*/}
         <TodoLists />
    </React.Fragment>
  )
}

export default App
