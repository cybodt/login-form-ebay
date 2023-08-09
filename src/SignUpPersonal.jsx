import React from 'react';
import './SignUpPersonal.css';

function SignUpPersonal() {
  return (
    <div className='sign-up-personal__container'>
      <form className='sign-up-personal__form'>
        <div className='sign-up-personal__first-and-last-name'>
          <label htmlFor='first-name'>First name</label>
          <input
            type='text'
            id='first-name'
            className='sign-up-personal__input-first-name'
          />
          <label htmlFor='last-name'>Last name</label>
          <input
            type='text'
            id='last-name'
            className='sign-up-personal__input-last-name'
          />
        </div>
        <label htmlFor='sign-up-email'>Email</label>
        <input
          type='text'
          id='sign-up-email'
          className='sign-up-personal__input-email'
        />
        <label htmlFor='sign-up-password'>Password</label>
        <input
          type='password'
          id='sign-up-password'
          className='sign-up-personal__input-password'
        />
        <div className='sign-up-personal__agreement-and-notice'>

          tova e samo test
        </div>
        <button type='submit'>Create account</button>
      </form>
      <div className='sign-up-personal__vertical-delimiter'></div>
      <div className='sign-up-personal__social-login'></div>
    </div>
  );
}

export default SignUpPersonal;