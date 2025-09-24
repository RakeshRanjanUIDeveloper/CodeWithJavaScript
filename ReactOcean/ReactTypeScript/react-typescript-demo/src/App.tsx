import React from 'react'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
// import Counter from './components/state/Counter'
import { ThemeContextProvider } from './components/context/ThemeContext'
import Box from './components/context/Box'

function App() {
 const personName = {
  first : 'Rakesh',
  last : 'Ranjan '
 }
 const nameList = [
  {
    first : 'Rakesh',
    last : 'Ranjan'
  },
  {
    first : 'Rishi',
    last: 'Ranjan'
  },
  {
    first : 'Misu',
    last : 'Ranjan'
  }
 ]
  return (
    <React.Fragment>
        <Greet name="Rakesh" messageCount={20} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="Loading" />
        <Heading>PlaceHolder Text</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicpario!</Heading>
        </Oscar>
        <Greet name="Rakesh"  isLoggedIn={false} />
        <Button handleClick={(event, id) => console.log("Button clicked", event, id)}  />
          <Input value='' handleChange={(event) => console.log(event)} />
          <Container styles={{border:'1px solid black', padding:'1rem'}} />
          {/* <Counter /> */}
          <ThemeContextProvider>
            <Box />
          </ThemeContextProvider>
    </React.Fragment>
  )
}

export default App
