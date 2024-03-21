import React from 'react';
import './PersonalFormInput.css';

function PersonalFormInput(props) {
  const {
    value,
    onChange,
    onBlur,
    unfocused,
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
    errorMessage,
    containerClassName
  } = extraProps;

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
        required={required}
        onChange={onChange}
        onBlur={onBlur}
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