import React from 'react';
import './PersonalFormInput.css';

function PersonalFormInput(props) {
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
    label,
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
        onChange={onChange}
      />
    </div>
  );
}

export default PersonalFormInput;