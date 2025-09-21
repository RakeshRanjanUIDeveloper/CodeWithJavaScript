import React from 'react'
import './App.css'
import MyComponent from './components/Render/MyComponent'
import MyComponentt from './components/Render/MyComponentt'
import MyComponenttt from './components/Render/MyComponenttt'
import CounterState from './components/UseReducer/CounterState'
import CounterReducer from './components/UseReducer/CounterReducer'
import CounterObject from './components/UseReducer/CounterObject'
import { Test } from './components/TestKnowledge/Test'
import CleanUpFunction from './components/TestKnowledge/CleanUpFunction'
import { LifeCycleDemo } from './components/TestKnowledge/LifeCycleDemo'
import HOC from './components/TestKnowledge/HOC'
import ThemeProvider from './components/TestKnowledge/ContextAPI/ThemeProvider'
import ThemePage from './components/TestKnowledge/ContextAPI/ThemePage'
import UseMemo from './components/TestKnowledge/UseMemo'
import FetchData from './components/TestKnowledge/CustomHook/FetchData'

function App() {
  return (
    <React.Fragment>
      {/* <MyComponent />
      <MyComponentt />
      <MyComponenttt /> 
      <CounterState />
      <CounterReducer />
      <CounterObject />
        <Test />
        <CleanUpFunction />
        <LifeCycleDemo />
        <HOC />
        <ThemeProvider>
          <ThemePage />
        </ThemeProvider>
        <UseMemo />*/}
        <FetchData />
    </React.Fragment>
  )
}

export default App
