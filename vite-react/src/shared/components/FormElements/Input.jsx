import React from "react";
import './Input.css'
import { useReducer } from "react";
import { useEffect } from "react";
import { validate } from "../util/validators";
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
            isValid: validate(action.val, action.validators)
        };
        case 'TOUCH': {
            return{
                ...state,
                isTouched: true
            }
        }
    default:
        return state;
    }
};
const Input = props => {
    //these are the initial states
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false, 
        isValid: props.initialValid || false
    });

const {id, onInput} = props;
const {value, isValid} = inputState;
useEffect(()=>{
    onInput(id, value, isValid)
}, [id, value, isValid, onInput])

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE' , 
            val:event.target.value, 
            validators: props.validators
        })
    };

    const touchHandler = () => {
        dispatch(
            {
                type: 'TOUCH'
            }
        )
    }

    const element = 
    props.element === 'input' ? (
    <input 
        id={props.id} 
        type={props.type}
        placeholder={props.placeholder} 
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler} 
    />
    ) : (
    <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        onChange={changeHandler} 
        value= {inputState.value}
        onBlur={touchHandler}
    />
    )
    
    return(
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
};

export default Input;