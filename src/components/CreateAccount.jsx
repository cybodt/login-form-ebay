import React from 'react';
import './CreateAccount.css';

function CreateAccount() {
  return (
    <div className='create-account'>
      <div className='create-account__image'>
        <img
          src='/images/other-icons/create-personal-account.jpg'
          alt='create personal account'
        />
      </div>
      <div className='create-account__container'>
        <h1>Create an account</h1>
        <div className='create-account__choose-type'>
          <button
            type='button'
            className='create-account__choose-personal'
          >
            Personal
          </button>
          <button
            type='button'
            className='create-account__choose-business'
          >
            Business
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
