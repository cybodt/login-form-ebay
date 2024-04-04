import React from 'react';
import './SignUpWelcome.css';

function SignUpWelcome() {
  return (
    <div className='sign-up-welcome'>
      <h1>Create an account</h1>
      <div className='sign-up-welcome__option'>
        <div className='sign-up-welcome__personal-account'>
          <input
            type='radio'
            id='personal-account'
            name='account-options'
            value='personal-account'
          />
          <label htmlFor='personal-account'>Personal account</label>
        </div>
        <div className='sign-up-welcome__business-account'>
          <input
            type='radio'
            id='business-account'
            name='account-options'
            value='business-account'
          />
          <label htmlFor='business-account'>Business account</label>
        </div>
        <button
          type='button'
          className='sign-up-welcome__option-info'
        >
          <img
            src='/images/other-icons/info-icon.png'
            alt='info about type account'
          />
        </button>
      </div>
    </div>
  );
}

export default SignUpWelcome;