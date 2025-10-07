import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'handleIncrement' :
            return state +1;
        case 'handleDecrement' :
            return state -1 ;
        case 'handleReset' :
            return initialState;
        default :
            return state;
    }
}
const CounterReducer = () => {
   const[count, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
        <h2>Counter using useReducer</h2>
        <h3>Count - {count}</h3>
        <button onClick={() => dispatch('handleIncrement')}>Increment</button>
        <button onClick={() => dispatch('handleDecrement')}>Decrement</button>
        <button onClick={() => dispatch('handleReset')}>Reset</button>
    </React.Fragment>
  )
}

export default CounterReducer