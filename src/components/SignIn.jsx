import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className='sign-in__container'>
      <div className='sign-in__greeting'>
        <h1>Hello</h1>
        <div>Sign in to eBay or&nbsp;
          <Link
            className='sign-up__link'
            to='/signuppersonal'
          >
            create an account
          </Link>
        </div>
      </div>
      <form className='sign-in__form'>
        <label htmlFor='login-email'>Email</label>
        <input
          type='text'
          id='login-email'
          className='sign-in__input-email'
        />
        <label htmlFor='login-password'>Password</label>
        <input
          type='password'
          id='login-password'
          className='sign-in__input-password'
        />
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;