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
      pattern: '^[a-zA-Z0-9]{3,}$',
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
      pattern: '^[a-zA-Z0-9]{3,}$',
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
      pattern: '^([a-zA-Z0-9_\\-.+])+@([a-zA-Z0-9_\\-.])+\\.([a-zA-Z]{2,})$',
      required: true,
      containerClassName: 'sign-up-personal__email'
    },
    {
      id: 'password',
      className: 'sign-up-personal__input-password',
      // type: 'password',
      type: 'text',
      name: 'password',
      maxlength: 64,
      label: 'Password',
      // Minimum eight characters with at least one letter and one number or special character
      pattern: '^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-])(?!.*?[^a-zA-Z0-9#?!@$%^&*\\-]).{8,}$',
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
        <div className='sign-up-personal__agreement-and-notice'>
          <p>
            By selecting <b>Create personal account</b>, you agree to our <Link className='sign-up-personal__agreement-and-notice-links' to='/user-agreement'>User Agreement</Link> and acknowledge reading our <Link className='sign-up-personal__agreement-and-notice-links' to='/user-privacy-notice'>User Privacy Notice </Link>.
          </p>
        </div>
        <button
          type='submit'
          className='sign-up-personal__create-personal-account-button'
        >Create personal account
        </button>
      </form>
      <div className='sign-up-personal__separator-container'>
        <div className='sign-up-personal__horizontal-line' />
        <div className='sign-up-personal__horizontal-text'>
          or continue with
        </div>
      </div>
    </div>
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