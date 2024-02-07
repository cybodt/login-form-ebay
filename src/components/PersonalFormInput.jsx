import React from 'react';

function PersonalFormInput(props) {
  const {
    key,
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
    <div className='personal-form-input'>
      <div className={containerClassName}>
        <label htmlFor={id}>{label}</label>
        <input
          key={key}
          id={id}
          className={className}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default PersonalFormInput;