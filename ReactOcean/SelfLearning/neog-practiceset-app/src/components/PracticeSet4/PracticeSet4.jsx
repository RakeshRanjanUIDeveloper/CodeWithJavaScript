import React from 'react'
import Tab from './Tab'
import ImproveTab from './ImproveTab'
import Welcome from './Welcome'
import FruitsVegetables from './FruitsVegetables'
import TodoItems from './TodoItems'
import Tasks from './Tasks'
import Books from './Books'
import Lives from './Lives'

const PracticeSet4 = () => {
    const todoItems = [
 {id: 1, task: "Writing 1-page poem", isDone: true},
 {id: 2, task: "Gym", isDone: false},
 {id: 3, task: "Shopping", isDone: false},
 {id: 4, task: "Standup call", isDone: true},
]
const taskItems = [
 {id: 1, task: "Writing 1-page poem", isDone: false},
 {id: 2, task: "Gym", isDone: false},
 {id: 3, task: "Shopping", isDone: false},
 {id: 4, task: "Standup call", isDone: false},
]
  return (
    <div>
       {/*  <Tab /> */}
        <ImproveTab />
        <Welcome />
        <FruitsVegetables />
        <TodoItems todoItems={todoItems} />
        <Tasks taskItems={taskItems} />
        <Books />
        <Lives />
    </div>
  )
}

export default PracticeSet4