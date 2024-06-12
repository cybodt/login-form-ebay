import React, { useEffect, useState } from 'react';
import './PersonalFormInput.css';

function PersonalFormInput(props) {
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleOnFocus = (e) => {
    setUnfocused(false);
    setTriggerOnFocus(true);
    if (e.target.value.length === 0) {
      setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
    }
    else if (value.length >= 8 && /(?=.*?[^a-zA-Z0-9#?!@$%^&*\\-])/.test(value) && /(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value)) {
      setUnfocused(true);
      setErrorMessage('Please remove the symbol you entered and try a different one.');
    }
  };

  // ^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-])(?!.*?[^a-zA-Z0-9#?!@$%^&*\\-]).{8,}$

  useEffect(() => {
    // prevent useEffect for initial render when triggerOnFocus is false
    if (triggerOnFocus && name === 'password') {
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
          else if (/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-])(?!.*?[^a-zA-Z0-9#?!@$%^&*\\-]).{8,}$/.test(value)) {
            setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
          }
          break;
        }
        case (value.length === 0):
          setErrorMessage('At least 1 letter, a number or symbol, at least 8 characters.');
          break;
        case (value.length >= 8 && /(?=.*?[^a-zA-Z0-9#?!@$%^&*\\-])/.test(value) && /(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value)):
          // case (value.length >= 8 && !/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value) && /(?=.*?[a-zA-Z])/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value)):
          console.log(/^(?!.*?[^`~\\|\\/])(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          console.log(/^(?!.*?[a-zA-Z])(?!.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          setUnfocused(true);
          setErrorMessage('Please remove the symbol you entered and try a different one.');
          break;
        case (value.length >= 8 && !/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value) && /(?=.*?[a-zA-Z])/.test(value)):
          console.log(/^(?=.*?[^`])(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          console.log(/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          setErrorMessage('A number or symbol.');
          break;
        case (value.length >= 8 && !/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value) && /(?=.*?[0-9#?!@$%^&*\\-])/.test(value)):
          console.log(/^(?=.*?[^`])(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          console.log(/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          setErrorMessage('At least 1 letter.');
          break;
        case (value.length >= 8 && !/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value)):
          console.log(/^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          setErrorMessage('At least 1 letter, a number or symbol.');
          break;
        default:
          console.log(/^(?=.*?[^`])(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-]).{8,}$/.test(value));
          setErrorMessage('');
          console.log('default log');
      }
    }
  }, [value]);

  const handleOnBlur = (e) => {
    // Please remove the symbol you entered and try a different one.
    setUnfocused(true);
    switch (e.target.name) {
      case 'firstname':
        setErrorMessage('Please enter your first name');
        break;
      case 'lastname':
        setErrorMessage('Please enter your last name');
        break;
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
      }
        break;
      case 'password':
        if (e.target.value.length === 0) {
          setErrorMessage('Please enter a password.');
          // also for all other cases, when click outside the field -> errorMessage turns from black to red, because 'setUnfocused(true)'
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