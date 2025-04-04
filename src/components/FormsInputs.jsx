import React, { useEffect, useState } from 'react';
import './FormsInputs.css';

function FormsInputs(props) {
  const [errorMessage, setErrorMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const [unfocused, setUnfocused] = useState(false);
  const [triggerOnFocus, setTriggerOnFocus] = useState(false);
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

  const handleOnFocus = () => {
    setTriggerOnFocus(true);
    setFocused(true);
    setUnfocused(false);
    if (value.length === 0) {
      setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
    }
    else if (value.length >= 8 && /(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value) && /(?=.*?[^a-zA-Z0-9#?!@$%^&*\\-])/.test(value)) {
      setFocused(false);
      setUnfocused(true);
      // keeps in red the error message when the field is focused: 'Please remove the symbol you entered and try a different one.'
    }
  };

  useEffect(() => {
    // prevent useEffect for initial render when triggerOnFocus is false
    if (triggerOnFocus) {
      setFocused(true);
      setUnfocused(false);
      switch (true) {
        case (value.length > 0 && value.length < 8): {
          if (/(?=.*?[a-zA-Z])/.test(value) && !/(?=.*?[0-9#?!@$%^&*\\-])/.test(value)) {
            setErrorMessage('A number or symbol, at least 8 characters.');
          }
          else if (!/(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value)) {
            setErrorMessage('At least 1 letter, at least 8 characters.');
          }
          else if (/(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value)) {
            setErrorMessage('At least 8 characters.');
          }
          else if (!/(?=.*?[a-zA-Z])/.test(value) && !/(?=.*?[0-9#?!@$%^&*\\-])/.test(value)) {
            setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
          }
          break;
        }
        case (value.length === 0):
          setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
          break;
        case (value.length >= 8 && /(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value) && /(?=.*?[^a-zA-Z0-9#?!@$%^&*\\-])/.test(value)):
          setFocused(false);
          setUnfocused(true);
          setErrorMessage('Please remove the symbol you entered and try a different one.');
          break;
        case (value.length >= 8 && /(?=.*?[a-zA-Z])/.test(value) && !/(?=.*?[0-9#?!@$%^&*\\-])/.test(value)):
          setErrorMessage('A number or symbol.');
          break;
        case (value.length >= 8 && !/(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value)):
          setErrorMessage('At least 1 letter.');
          break;
        case (value.length >= 8 && /(?=.*?[^a-zA-Z0-9#?!@$%^&*\\-])/.test(value)):
          setErrorMessage('At least 1 letter, a number or symbol.');
          break;
        default:
          setErrorMessage('');
      }
    }
  }, [value]);

  const handleOnBlur = () => {
    setFocused(false);
    setUnfocused(true);
    switch (true) {
      case (name === 'first-name'):
        setErrorMessage('Please enter your first name');
        break;
      case (name === 'last-name'):
        setErrorMessage('Please enter your last name');
        break;
      case (name === 'business-name'):
        setErrorMessage('Please enter your business name.');
        break;
      case (name === 'email' || name === 'business-email'): {
        // convert regex string (pattern) to regex object (patternX)
        const patternX = new RegExp(pattern);
        if (value.length > 0 && value.length < 6) {
          setErrorMessage('Email address should be at least 6 characters.');
        }
        else if (value.length >= 6 && !(patternX.test(value))) {
          setErrorMessage('Email address is invalid. Please enter a valid email address.');
        }
        else {
          setErrorMessage('Please enter your email address.');
        }
      }
        break;
      case (name === 'password' || name === 'business-password'):
        if (value.length === 0) {
          setErrorMessage('Please enter a password.');
          // also for all other cases, when click outside the field -> errorMessage turns from black to red, because 'setFocused(false)' and 'setUnfocused(true)'
        }
        break;
      default:
        setErrorMessage('');
    }
  };

  return (
    <div className={containerClassName}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className={className}
        name={name}
        value={value}
        maxLength={maxlength}
        pattern={pattern}
        required={required}
        onChange={onChange}
        onBlur={handleOnBlur}
        onFocus={() => (
          name === 'password' || name === 'business-password'
        ) && handleOnFocus()}
        data-focused={focused}
        data-unfocused={unfocused}
      />
      <span className='forms-inputs__error-messages'>
        {errorMessage}
      </span>
    </div>
  );
}

export default FormsInputs;