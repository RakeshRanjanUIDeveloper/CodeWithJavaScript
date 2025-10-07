import React, { useReducer } from 'react'

const initialState = {
    counter : 0,
    counter1 : 5 
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'handleIncrement' :
            return {...state, counter: state.counter + action.payload};
        case 'handleDecrement' :
            return {...state, counter: state.counter -  action.payload};
        case 'handleIncrement1' :
            return {...state, counter1: state.counter1 + action.payload};
        case 'handleDecrement1' :
            return {...state, counter1: state.counter1 -  action.payload};
        case 'handleReset' :
            return initialState;
        default :
            return state;
    }
}
const CounterObject = () => {
   const[count, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
        <h2>Counter Object using useReducer</h2>
        <h3>Count - {count.counter}</h3>
        <h3>Count - {count.counter1}</h3>
        <button onClick={() => dispatch({type : 'handleIncrement', payload:1})}>Increment By 1</button>
        <button onClick={() => dispatch({type : 'handleDecrement', payload:1})}>Decrement By 1</button>
        <button onClick={() => dispatch({type : 'handleIncrement', payload:5})}>Increment By 5</button>
        <button onClick={() => dispatch({type : 'handleDecrement', payload:5})}>Decrement By 5</button>
        <button onClick={() => dispatch({type : 'handleIncrement1', payload:2})}>Increment By 2 For 2nd Counter</button>
        <button onClick={() => dispatch({type : 'handleDecrement1', payload:2})}>Decrement By 2 For 2nd Counter</button>
        <button onClick={() => dispatch({type : 'handleReset'})}>Reset</button>
    </React.Fragment>
  )
}

export default CounterObject