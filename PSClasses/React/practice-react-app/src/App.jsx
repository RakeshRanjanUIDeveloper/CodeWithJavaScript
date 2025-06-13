
import './App.css'
import Accordion from './components/Accordion/Accordion'
import Authentication from './components/Authentication/Authentication'
import Counter from './components/Counter/Counter'
import EvenOrOddChecker from './components/EvenOrOddChecker/EvenOrOddChecker'
import GuessTheNumber from './components/GuessTheNumber/GuessTheNumber'
import InputFocus from './components/InputFocus/InputFocus'
import ProgressBar from './components/ProgressBar/ProgressBar'
import RecipeExplorer from './components/RecipeExplorer/RecipeExplorer'
import TodoList from './components/TodoApp/TodoList'
import TogglePassword from './components/TogglePassword/TogglePassword'
import Tooltip from './components/Tooltip/Tooltip'


function App() {
  return (
    <>
      {/* <TodoList /> 
      <Accordion />
      <Counter />
      <Authentication />
      <GuessTheNumber />
      <InputFocus />
      <EvenOrOddChecker /> 
      <ProgressBar />
      <Tooltip />
      <TogglePassword />*/}
        <RecipeExplorer />
    </>
  )
}

export default App
