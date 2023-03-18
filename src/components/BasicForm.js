import useInputField from "../hooks/use-inputField";

const BasicForm = (props) => {

const {
  value: enteredFirstName,
  isValid: enteredFirstNameIsValid,
  hasError: firstNameInputHasError,
  ValueChangeHandler: firstNameValueChangeHandler,
  inputFieldBlurHandler: firstNameBlurHandler,
  reset: restFirstNameInput
} = useInputField(value => value.trim() !== '');

const {
value: enteredLasttName,
isValid: enteredLastNameIsValid,
hasError: lastNameInputHasError,
ValueChangeHandler: lastNameValueChangeHandler,
inputFieldBlurHandler: lastNameBlurHandler,
reset: restLastNameInput
} = useInputField(value => value.trim() !== '');

const {
  value: enteredEmailAddress,
  isValid: enteredEmailAddressIsValid,
  hasError: EmailAddressInputHasError,
  ValueChangeHandler: EmailAddressValueChangeHandler,
  inputFieldBlurHandler: EmailAddressBlurHandler,
  reset: restEmailAddressInput
  } = useInputField(value => value.includes('@'));

  let formIsValid = false;

  if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailAddressIsValid) {
    formIsValid = true;
  };


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    restFirstNameInput();
    restLastNameInput();
    restEmailAddressInput();
  
  if(!enteredFirstNameIsValid && !enteredLastNameIsValid && !enteredEmailAddressIsValid) {
    return;
  };
   
  console.log(enteredFirstName);
  console.log(enteredLasttName);
  console.log(enteredEmailAddress);

  };

  const firstNameInputClasses = firstNameInputHasError
  ? 'form-control invalid'
  : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
  ? 'form-control invalid'
  : 'form-control';

  const emailAddressInputClasses = EmailAddressInputHasError
  ? 'form-control invalid'
  : 'form-control';

  return (

    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>

        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={firstNameValueChangeHandler}
          onBlur={firstNameBlurHandler}
          value={enteredFirstName}
          />
          {firstNameInputHasError && <p className="error-text">first name must not be empty</p>}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name'
          onChange={lastNameValueChangeHandler} 
          onBlur={lastNameBlurHandler}
          value={enteredLasttName}
          />
          {lastNameInputHasError && <p className="error-text">last name must not be empty</p>}
        </div>
      </div>

      <div className={emailAddressInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name' 
        onChange={EmailAddressValueChangeHandler}
        onBlur={EmailAddressBlurHandler}
        value={enteredEmailAddress}
        />
        {EmailAddressInputHasError && <p className="error-text">email address must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
