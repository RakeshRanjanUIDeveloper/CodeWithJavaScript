import React from 'react'
import './App.css'
import MyComponent from './components/Render/MyComponent'
import MyComponentt from './components/Render/MyComponentt'
import MyComponenttt from './components/Render/MyComponenttt'
import CounterState from './components/UseReducer/CounterState'
import CounterReducer from './components/UseReducer/CounterReducer'
import CounterObject from './components/UseReducer/CounterObject'

function App() {
  return (
    <React.Fragment>
      {/* <MyComponent />
      <MyComponentt />
      <MyComponenttt /> */}
      <CounterState />
      <CounterReducer />
      <CounterObject />
    </React.Fragment>
  )
}

export default App
