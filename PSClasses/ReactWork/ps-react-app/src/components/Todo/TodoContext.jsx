import {createContext, useState } from "react";
import todosData from './data/todos.json'

//Create Context
export const TodoContext = createContext();

//Create Provider Component
export const TodoProvider = ({children}) =>{
    const [todos, setTodos] = useState(todosData);
    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}