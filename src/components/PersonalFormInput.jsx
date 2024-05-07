import React, { useState } from 'react';
import './PersonalFormInput.css';

function PersonalFormInput(props) {
  const [errorMessage, setErrorMessage] = useState('');
  const [unfocused, setUnfocused] = useState(false);
  const {
    value,
    onChange,
    extraProps
  } = props;
  const {
    id,
    className,
    type,
    name,
    required,
    maxlength,
    label,
    pattern,
    containerClassName
  } = extraProps;

  const handleOnFocus = (e) => {
    switch (true) {
      case (e.target.name === 'password' && e.target.value.length === 0): {
        setUnfocused(false);
        setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
        break;
      }
      default:
        setErrorMessage('');
    }
  };

  const handleOnBlur = (e) => {
    setUnfocused(true);
    switch (e.target.name) {
      case 'firstname': {
        setErrorMessage('Please enter your first name');
        console.log(unfocused);
        break;
      }
      case 'lastname': {
        setErrorMessage('Please enter your last name');
        break;
      }
      case 'email': {
        // convert regex string(pattern) to regex object(patternX)
        const patternX = new RegExp(pattern);
        if (e.target.value.length > 0 && e.target.value.length < 6) {
          setErrorMessage('Email address should be at least 6 characters.');
        }
        else if (e.target.value.length >= 6 && !(patternX.test(e.target.value))) {
          setErrorMessage('Email address is invalid. Please enter a valid email address.');
        }
        else {
          setErrorMessage('Please enter your email address.');
        }
        break;
      }
      // case 'password': {
      //   // const patternX = new RegExp(pattern);
      //   // if (e.target.value.length > 0 && e.target.value.length < 8) {
      //   //   setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
      //   // }
      //   // else if (e.target.value.length >= 8 && (/[a-zA-Z]/.test(e.target.value))) {
      //   //   setErrorMessage('')
      //   // }
      //   console.log(/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(e.target.value));
      //   switch (true) {
      //     case (e.target.value.length > 0 && e.target.value.length < 8): {
      //       // setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
      //       // if (/[a-zA-Z]/.test(e.target.value) && !(/[0-9]/.test(e.target.value) || (/[#?!@$%^&*-]/.test(e.target.value))))
      //       console.log('test switch');
      //       if (!/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(e.target.value)) {
      //         console.log(/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(e.target.value));

      //         setErrorMessage('1At least 1 letter, a number or symbol, at least 8 characters.');
      //       }
      //       break;
      //     }
      //     default:
      //       setErrorMessage(e.target.value.length);
      //   }
      //   break;
      // }
      default:
        setErrorMessage('');
    }
  };

  return (
    <div className={containerClassName}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={className}
        type={type}
        name={name}
        value={value}
        maxLength={maxlength}
        pattern={pattern}
        required={required}
        onChange={onChange}
        onBlur={handleOnBlur}
        onFocus={e => name === 'password' && handleOnFocus(e)}
        data-unfocused={unfocused}
      />
      <span className='personal-form-input__error-messages'>
        {errorMessage}
      </span>
    </div>
  );
}

export default PersonalFormInput;