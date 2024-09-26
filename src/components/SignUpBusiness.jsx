import React, { useState } from 'react';
import './SignUpPersonalAndBusiness.css';
import FormsInputs from './FormsInputs';

function SignUpBusiness() {
  const [values, setValues] = useState({
    'business-name': '',
    'business-email': '',
    'business-password': ''
  });

  const inputs = [
    {
      id: 'business-name',
      className: 'sign-up-business__input-business-name',
      type: 'text',
      name: 'business-name',
      maxlength: 63,
      label: 'Business name',
      pattern: '^[a-zA-Z0-9]{3,}$',
      required: true,
      containerClassName: 'sign-up-business__business-name'
    },
    {
      id: 'business-email',
      className: 'sign-up-business__input-business-email',
      type: 'text',
      name: 'business-email',
      maxlength: 64,
      label: 'Business email',
      pattern: '^([a-zA-Z0-9_\\-.+])+@([a-zA-Z0-9_\\-.])+\\.([a-zA-Z]{2,})$',
      required: true,
      containerClassName: 'sign-up-business__business-email'
    },
    {
      id: 'business-password',
      className: 'sign-up-business__input-business-password',
      type: 'password',
      name: 'business-password',
      maxlength: 64,
      label: 'Password',
      // Minimum eight characters with at least one letter and one number or special character
      pattern: '^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-])(?!.*?[^a-zA-Z0-9#?!@$%^&*\\-]).{8,}$',
      required: true,
      containerClassName: 'sign-up-business__business-password'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='sign-up-business__form'
    >
      <div className='sign-up-business__description'>
        <p>
          Continue to register as a <b>business or nonprofit</b>, or if you plan to sell a large number of goods.
        </p>
      </div>
      {inputs.map(input => (
        <FormsInputs
          key={input.id}
          value={values[input.name]}
          onChange={handleChange}
          extraProps={input}
        />
      ))}
      {/* here to place select country component */}
      <div className='sign-up-business__checkbox-wrapper'>
        <input
          type='checkbox'
          id='biz-only-to-buy'
          className='sign-up-business__checkbox-input'
        />
        <label
          htmlFor='biz-only-to-buy'
          className='sign-up-business__checkbox-label'
        >
          I’m only interested in buying on eBay for now
        </label>
      </div>
      <div className='sign-up-business__agreement-and-notice'>
        <p>
          By selecting Create business account, you agree to our User Agreement and acknowledge reading our User Privacy Notice.
        </p>
      </div>
      <button
        type='submit'
        className='sign-up-business__create-business-account-button'
      >Create business account
      </button>
    </form>
  );
}

export default SignUpBusiness;