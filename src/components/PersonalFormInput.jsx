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

  const handleFocus = (e) => {
    setUnfocused(true);
    switch (e.target.name) {
      case 'firstname': {
        setErrorMessage('Please enter your first name');
        break;
      }
      case 'lastname': {
        setErrorMessage('Please enter your last name');
        break;
      }
      case 'email': {
        console.log(/^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(e.target.value));
        if (e.target.value.length > 0 && e.target.value.length < 6) {
          setErrorMessage('Email address should be at least 6 characters.');
        }
        // // else if (e.target.value.length >= 6 && !(/{e.target.value}/.test(e.target.value))) {
        // else if (e.target.value.length >= 6 && !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value))) {
        //   setErrorMessage('Email address is invalid. Please enter a valid email address.');
        //   console.log(typeof e.target.value);
        //   console.log(typeof `/${pattern}/`);
        //   console.log(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value));
        // }
        // else {
        //   setErrorMessage('Please enter your email address.');
        // }
        break;
      }
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
        onBlur={handleFocus}
        data-unfocused={unfocused}
      />
      <span
        className='personal-form-input__error-messages'
      >
        {errorMessage}
      </span>
    </div>
  );
}

export default PersonalFormInput;