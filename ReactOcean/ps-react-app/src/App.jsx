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
import CartDetails from './components/PromiseAll/CartDetails';
import Joke from './components/Joke/Joke';
import ColorGame from './components/ColorGame/ColorGame';
import SuspenseLazyFallback from './components/SuspenseLazyFallback/SuspenseLazyFallback';
import ErrorBoundaryWithSuspense from './components/ErrorBoundaryWithSuspense/ErrorBoundaryWithSuspense';
import Counter from './Hooks/UseReducer/Counter';
import Todo from './Hooks/UseReducer/Todo';
import MyTasks from './Hooks/UseReducer/MyTasks';
import ProductListingApp from './components/productListingApp/ProductListingApp';


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
         
         <UserList />
         <UserListWithoutUseMemo />
         <TodoLists />
         
         <Joke /> 
         <ColorGame />
        
         <ErrorBoundaryWithSuspense />
         <TicTacToe />
          <SuspenseLazyFallback />
          <CartDetails />
          <Counter />
          <Todo />
          <MyTasks />*/}
          <ProductListingApp />
    </React.Fragment>
  )
}

export default App
