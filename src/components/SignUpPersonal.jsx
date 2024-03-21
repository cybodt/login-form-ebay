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

  // const [errorMessages, setErrorMessages] = useState({
  //   errorFirstName: 'Please enter your first name',
  //   errorLastName: 'Please enter your last name',
  //   // errorEmail: '',
  //   // errorPassword: ''
  // });

  const [unfocused, setUnfocused] = useState(false);

  const inputs = [
    {
      id: 'first-name',
      className: 'sign-up-personal__input-first-name',
      type: 'text',
      name: 'firstname',
      maxlength: 63,
      errorMessage: 'Please enter your first name',
      label: 'First name',
      required: true,
      containerClassName: 'sign-up-personal__first-name'
    },
    {
      id: 'last-name',
      className: 'sign-up-personal__input-last-name',
      type: 'text',
      name: 'lastname',
      maxlength: 63,
      errorMessage: 'Please enter your last name',
      label: 'Last name',
      required: true,
      containerClassName: 'sign-up-personal__last-name'
    },
    {
      id: 'email',
      className: 'sign-up-personal__input-email',
      type: 'text',
      name: 'email',
      maxlength: 64,
      errorMessage: '',
      label: 'Email',
      required: true,
      containerClassName: 'sign-up-personal__email'
    },
    {
      id: 'password',
      className: 'sign-up-personal__input-password',
      type: 'password',
      name: 'password',
      maxlength: 64,
      errorMessage: '',
      label: 'Password',
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

  const handleFocus = (e) => {
    setUnfocused(true);
    console.log('test focus');
    console.log(typeof unfocused);
    console.log(unfocused);

    // if (e.target.name === 'firstname') {
    //   if (e.target.value === '') {
    //     setErrorMessages(errorMessages.errorFirstName);
    //   }
    // }
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
            onBlur={handleFocus}
            unfocused={unfocused.toString()}
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