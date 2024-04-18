import React, { useState } from 'react';
import './SignUpPersonal.css';
import { Link } from 'react-router-dom';
import PersonalFormInput from './PersonalFormInput';

function SignUpPersonal() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const inputs = [
    {
      id: 'first-name',
      className: 'sign-up-personal__input-first-name',
      type: 'text',
      name: 'firstname',
      maxlength: 63,
      label: 'First name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
      containerClassName: 'sign-up-personal__first-name'
    },
    {
      id: 'last-name',
      className: 'sign-up-personal__input-last-name',
      type: 'text',
      name: 'lastname',
      maxlength: 63,
      label: 'Last name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
      containerClassName: 'sign-up-personal__last-name'
    },
    {
      id: 'email',
      className: 'sign-up-personal__input-email',
      type: 'text',
      name: 'email',
      maxlength: 64,
      label: 'Email',
      pattern: '^([A-Za-z0-9_\\-.+])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,})$',
      required: true,
      containerClassName: 'sign-up-personal__email'
    },
    {
      id: 'password',
      className: 'sign-up-personal__input-password',
      type: 'password',
      name: 'password',
      maxlength: 64,
      label: 'Password',
      // Minimum eight characters, at least one letter, one number and one special character
      pattern: '"^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"',
      required: true,
      containerClassName: 'sign-up-personal__password'
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
    // <div className='sign-up-personal__container'>
    <form
      onSubmit={handleSubmit}
      className='sign-up-personal__form'
    >
      {inputs.map(input => (
        <PersonalFormInput
          key={input.id}
          value={values[input.name]}
          onChange={handleChange}
          extraProps={input}
        />
      ))}
      <div className='sign-up-personal__agreement-and-notice'>
        <p>
          By <b>Creating an account</b>, you agree to our <Link to='/useragreement'>User Agreement</Link> and acknowledge reading our <Link to='/userprivacynotice'>User Privacy Notice </Link>.
        </p>
      </div>
      <button
        type='submit'
        className='sign-up-personal__create-account-button'
      >Create account
      </button>
    </form>
  );
}

export default SignUpPersonal;

{/* <div className='sign-up-personal__vertical-delimiter-container'>
        <div className='sign-up-personal__vertical-line' />
        <div className='sign-up-personal__horizontal-text'>or</div>
      </div> */}
{/* <div className='sign-up-personal__social-buttons'>
        <button
          type='button'
          className='sign-up-personal__continue-btns
                     sign-up-personal__google-btn'
        >
          <img
            src='/images/logos-on-buttons/google-logo.png'
            alt='Google logo'
          />
          <span>Continue with Google</span>
        </button>
        <button
          type='button'
          className='sign-up-personal__continue-btns
                     sign-up-personal__fb-btn'
        >
          <img
            src='/images/logos-on-buttons/facebook-logo.png'
            alt='Facebook logo'
          />
          <span>Continue with Facebook</span>
        </button>
        <button
          type='button'
          className='sign-up-personal__continue-btns
                     sign-up-personal__apple-btn'
        >
          <img
            src='/images/logos-on-buttons/apple-logo.png'
            alt='Apple logo'
          />
          <span>Continue with Apple</span>
        </button>
      </div> */}
