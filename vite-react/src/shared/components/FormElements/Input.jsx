import React from "react";
import './Input.css'
import { useReducer } from "react";

import React, { useReducer } from 'react';
//example of how useReducaer work
// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// };

// const Counter = () => {
//   // Initialize state using useReducer
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     </div>
//   );
// };

// export default Counter;


const inputReducer = (state,action) => {
    switch (action.type) {
        case 'CHANGE':
        return {
            ...state,
            value: action.val,
            isValid: true
        };
    default:
        return state;
    }
};
const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {value:'', isValid: false});

    const changeHandler = event => {
        dispatch({type: 'CHANGE' , val:event.target.value})
    };

    const element = 
    props.element === 'input' ? (
    <input 
        id={props.id} 
        type={props.type}
        placeholder={props.placeholder} 
        onChange={changeHandler}
        value={inputState.value} />
    ) : (
    <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value= {inputState.value}/>
    )
    
    return(
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
};

export default Input;