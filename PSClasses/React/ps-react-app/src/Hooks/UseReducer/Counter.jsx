import React, { useReducer } from 'react'

const Counter = () => {
    // useReducer - Hook that manage complex state logic. its alternative to useState
    // state - represent current value
    // dispatch - function that updates state value
    // reducer - function that keep logic of  how state get updated. it takes state and action as argument and return next state
    // initialState - Keep initial value
    
    const initialState = {count:0}
    const[state, dispatch] = useReducer(reducer, initialState);


    function reducer(state,action){
        switch(action.type){
            case 'increment' :
                    return {...state, count:state.count+1}
            case 'decrement' :
                    return {...state, count:state.count-1}
            default :
                return state
        }
    }
    function handleDecrement (){
        dispatch({type: 'decrement'})
    }
    function handleIncrement(){
        dispatch({type: 'increment'})
    }
  return (
    <React.Fragment>
        <h1>Count - {state.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </React.Fragment>
  )
}

export default Counter