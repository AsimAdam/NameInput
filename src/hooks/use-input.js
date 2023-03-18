import { useState } from "react";

const useInput = (validateValue) => {

const [enteredValue, setEnteredValue] = useState('');
const [isTouched, setIsTouched] = useState(false);

const ValueIsValid = validateValue(enteredValue);
const hasError = !ValueIsValid && isTouched;

const ValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
};

const inputBlurHandler = (event) => {
    setIsTouched(true);
 };

const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
 };

  return {
    value: enteredValue,
    isValid: ValueIsValid,
    hasError, 
    ValueChangeHandler, 
    inputBlurHandler,
    reset
  };

};




export default useInput;