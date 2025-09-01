
import React from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import AgeCalculator from './components/AgeCalculator/AgeCalculator'
import Authentication from './components/Authentication/Authentication'
import BlogPosts from './components/BlogPost/BlogPosts'
import Counter from './components/Counter/Counter'
import EvenOrOddChecker from './components/EvenOrOddChecker/EvenOrOddChecker'
import GuessTheNumber from './components/GuessTheNumber/GuessTheNumber'
import InputFocus from './components/InputFocus/InputFocus'
import ProgressBar from './components/ProgressBar/ProgressBar'
import RecipeExplorer from './components/RecipeExplorer/RecipeExplorer'
import TodoList from './components/TodoApp/TodoList'
import TogglePassword from './components/TogglePassword/TogglePassword'
import Tooltip from './components/Tooltip/Tooltip'
import PasswordStrength from './components/PasswordStrength/PasswordStrength'
import Pagination from './components/Pagination/Pagination'
import PostList from './hooks/CustomHook/PostList'
import CartsPagination from './components/CartsPagination/CartsPagination'
import Cars from './components/Cars/Cars'
import TodoLists from './components/TodoLists/TodoLists'
import ResizableLayout from './components/ResizableLayout/ResizableLayout'
import Tabs from './components/Tabs/Tabs'
import TabsData from './components/Tabs/TabsData'
import Navbar from './components/Navbar/Navbar'
import NavbarApp from './components/Navbar/NavbarApp'
import UserProfile from './components/UserProfile/userProfile'
import Counters from './components/usePrevious/Counters'
import ChipsInput from './components/ChipsInput/ChipsInput'
import HolyGrail from './components/HolyGrail/HolyGrail'
import ZigzagString from './components/ZigzagString/ZigzagString'
import ContactForm from './components/ContactForm/ContactForm'
import KeyIssue from './components/KeyIssue/KeyIssue'
import ColorExplorer from './components/ColorExplorer/ColorExplorer'
import BackToTop from './components/BackToTop/BackToTop'
import DragAndDrop from './components/DragAndDrop/DragAndDrop'

function App() {
  return (
    <React.Fragment>
      {/* <TodoList /> 
      <Accordion />
      <Counter />
      <Authentication />
      <GuessTheNumber />
      <InputFocus />
      <EvenOrOddChecker /> 
      <ProgressBar />
      <Tooltip />
      <TogglePassword />
        <RecipeExplorer />
        <AgeCalculator />
        <BlogPosts />
        <PasswordStrength />
        <Pagination />
        <PostList />
        <CartsPagination />
        <Cars />
        <TodoLists />
        <ResizableLayout />
        
         <NavbarApp />
         <UserProfile />
         <Counters />
        <ChipsInput />
        <HolyGrail />
        <ZigzagString />
        <ContactForm />
        <KeyIssue />
        <TabsData /> 
        <ColorExplorer />
        <BackToTop />*/}
        <DragAndDrop />
    </React.Fragment>
  )
}

export default App
