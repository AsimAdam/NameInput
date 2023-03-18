import { useState, useReducer } from "react";

const intialInputState =  {
    value: '',
    fieldIsTouched: false
   };

const inputStateReducer = (state, action) => {
    
    if(action.type === 'INPUT') {
       return { value: action.value, fieldIsTouched: state.fieldIsTouched };
    };

    if(action.type === 'BLUR') {
       return { fieldIsTouched: true, value: state.value }
    };

    if(action.type === 'RESET') {
       return { fieldIsTouched: false, value: '' }
    };

       return inputStateReducer;
};

const useInputField = (validateValue) => {

const [inputState, dispatch] = useReducer(inputStateReducer, intialInputState);

const valueValid = validateValue(inputState.value);
const hasError = !valueValid && inputState.fieldIsTouched;

const ValueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.value});
  };

const inputFieldBlurHandler = (event) => {
    dispatch({type: 'BLUR'});
    
};

const reset = () => {
    dispatch({type: 'RESET'});
};

return {
    value: inputState.value,
    isValid: valueValid,
    hasError,
    ValueChangeHandler,
    inputFieldBlurHandler,
    reset
};

};




export default useInputField;