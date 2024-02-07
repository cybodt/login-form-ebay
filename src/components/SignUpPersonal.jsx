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
      label: 'First name',
      containerClassName: 'sign-up-personal__first-name'
    },
    {
      id: 'last-name',
      className: 'sign-up-personal__input-last-name',
      type: 'text',
      name: 'lastname',
      label: 'Last name',
      containerClassName: 'sign-up-personal__last-name'
    },
    {
      id: 'email',
      className: 'sign-up-personal__input-email',
      type: 'text',
      name: 'email',
      label: 'Email',
      containerClassName: 'sign-up-personal__email'
    },
    {
      id: 'password',
      className: 'sign-up-personal__input-password',
      type: 'password',
      name: 'password',
      label: 'Password',
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
    <div className='sign-up-personal__container'>
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
        {/* <div className='sign-up-personal__first-and-last-name'>
          <div className='sign-up-personal__first-name'>
            <label htmlFor='first-name'>First name</label>
            <input
              type='text'
              id='first-name'
              className='sign-up-personal__input-first-name'
            />
          </div>
          <div className='sign-up-personal__last-name'>
            <label htmlFor='last-name'>Last name</label>
            <input
              type='text'
              id='last-name'
              className='sign-up-personal__input-last-name'
            />
          </div>
        </div> */}
        {/* <div className='sign-up-personal__email'>
          <label htmlFor='sign-up-email'>Email</label>
          <input
            type='text'
            id='sign-up-email'
            className='sign-up-personal__input-email'
          />
        </div> */}
        {/* <div className='sign-up-personal__password'>
          <label htmlFor='sign-up-password'>Password</label>
          <input
            type='password'
            id='sign-up-password'
            className='sign-up-personal__input-password'
          />
        </div> */}
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
      <div className='sign-up-personal__vertical-delimiter-container'>
        <div className='sign-up-personal__vertical-line' />
        <div className='sign-up-personal__horizontal-text'>or</div>
      </div>
      <div className='sign-up-personal__social-buttons'>
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
      </div>
    </div>
  );
}

export default SignUpPersonal;