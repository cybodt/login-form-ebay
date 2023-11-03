import React, { useState } from 'react';
import './SignUpPersonal.css';
import { Link } from 'react-router-dom';

function SignUpPersonal() {
  const [outlineFName, setOutlineFName] = useState('none');
  const [valueFName, setValueFName] = useState('');
  const [warningBorderFName, setWarningBorderFName] = useState('1px solid gray');
  const [displayErrorFName, setDisplayErrorFName] = useState('none');

  const handleChangeFirstName = (e) => {
    setValueFName(e.target.value);
  };

  const handleFocusFirstName = () => {
    setWarningBorderFName('1px solid gray');
    setOutlineFName('2px solid #0060df');
  };

  const handleFocusOutFirstName = (e) => {
    setOutlineFName('none');
    if (e.target.value === '') {
      setWarningBorderFName('1px solid #e0103a');
      setDisplayErrorFName('inline-block');
    }
    else {
      setDisplayErrorFName('none');
    }
  };

  return (
    <div className='sign-up-personal__container'>
      <form className='sign-up-personal__form'>
        <div className='sign-up-personal__first-and-last-name'>
          <div className='sign-up-personal__first-name'>
            <label htmlFor='first-name'>First name</label>
            <input
              type='text'
              id='first-name'
              className='sign-up-personal__input-first-name'
              value={valueFName}
              onChange={handleChangeFirstName}
              onFocus={handleFocusFirstName}
              onBlur={handleFocusOutFirstName}
              style={{
                outline: outlineFName,
                border: warningBorderFName
              }}
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
        </div>
        <div className='sign-up-personal__first-and-last-name-errors'>
          <div
            className='sign-up-personal__first-name-error'
            style={{
              display: displayErrorFName
            }}
          >
            Please enter your first name
          </div>
          <div className='sign-up-personal__last-name-error'>
            Please enter your last name
          </div>
        </div>
        <div className='sign-up-personal__email'>
          <label htmlFor='sign-up-email'>Email</label>
          <input
            type='text'
            id='sign-up-email'
            className='sign-up-personal__input-email'
          />
        </div>
        <div className='sign-up-personal__password'>
          <label htmlFor='sign-up-password'>Password</label>
          <input
            type='password'
            id='sign-up-password'
            className='sign-up-personal__input-password'
          />
        </div>
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