import React from 'react'
import './App.css'
import MyComponent from './components/Render/MyComponent'
import MyComponentt from './components/Render/MyComponentt'
import MyComponenttt from './components/Render/MyComponenttt'

function App() {
  return (
    <React.Fragment>
      <MyComponent />
      <MyComponentt />
      <MyComponenttt />
    </React.Fragment>
  )
}

export default App
