import React, { useState } from 'react';
import './PersonalFormInput.css';

function PersonalFormInput(props) {
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
    errorMessage,
    containerClassName
  } = extraProps;

  const handleFocus = () => {
    setUnfocused(true);
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