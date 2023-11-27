import React, { useEffect, useState } from 'react';
import './SignUpPersonal.css';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function SignUpPersonal() {
  const [outlineFName, setOutlineFName] = useState('none');
  const [outlineLName, setOutlineLName] = useState('none');
  const [outlineEmail, setOutlineEmail] = useState('none');
  const [outlinePassword, setOutlinePassword] = useState('none');
  const [valueFName, setValueFName] = useState('');
  const [valueLName, setValueLName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [warningBorderFName, setWarningBorderFName] = useState('1px solid gray');
  const [warningBorderLName, setWarningBorderLName] = useState('1px solid gray');
  const [warningBorderEmail, setWarningBorderEmail] = useState('1px solid gray');
  const [warningBorderPassword, setWarningBorderPassword] = useState('1px solid gray');
  const [namesErrorsContainer, setNamesErrorsContainer] = useState('none');
  const [displayErrorFName, setDisplayErrorFName] = useState('none');
  const [displayErrorLName, setDisplayErrorLName] = useState('none');
  const [displayErrorEmail, setDisplayErrorEmail] = useState('none');
  const [displayErrorPassword, setDisplayErrorPassword] = useState('none');
  const [unhidePassword, setUnhidePassword] = useState(false);

  useEffect(() => {
    if (displayErrorFName === 'none' && displayErrorLName === 'none') {
      setNamesErrorsContainer('none');
    }
  }, [displayErrorFName, displayErrorLName]);

  const handleChangeFirstName = (e) => {
    setValueFName(e.target.value);
    setDisplayErrorFName('none');
  };

  const handleFocusFirstName = () => {
    setWarningBorderFName('1px solid gray');
    setOutlineFName('2px solid #0060df');
  };

  const handleFocusOutFirstName = (e) => {
    setOutlineFName('none');
    if (e.target.value === '') {
      setWarningBorderFName('1px solid #e0103a');
      setNamesErrorsContainer('flex');
      setDisplayErrorFName('block');
    }
    else {
      setDisplayErrorFName('none');
    }
  };

  const handleChangeLastName = (e) => {
    setValueLName(e.target.value);
    setDisplayErrorLName('none');
  };

  const handleFocusLastName = () => {
    setWarningBorderLName('1px solid gray');
    setOutlineLName('2px solid #0060df');
  };

  const handleFocusOutLastName = (e) => {
    setOutlineLName('none');
    if (e.target.value === '') {
      setWarningBorderLName('1px solid #e0103a');
      setNamesErrorsContainer('flex');
      setDisplayErrorLName('block');
    }
    else {
      setDisplayErrorLName('none');
    }
  };

  const handleChangeEmail = (e) => {
    setValueEmail(e.target.value);
    setDisplayErrorEmail('none');
  };

  const handleFocusEmail = () => {
    setWarningBorderEmail('1px solid gray');
    setOutlineEmail('2px solid #0060df');
  };

  const handleFocusOutEmail = (e) => {
    setOutlineEmail('none');
    if (e.target.value === '') {
      setWarningBorderEmail('1px solid #e0103a');
      setDisplayErrorEmail('block');
    }
    else {
      setDisplayErrorEmail('none');
    }
  };

  const handleChangePassword = (e) => {
    setValuePassword(e.target.value);
    setDisplayErrorPassword('none');
  };

  const handleFocusPassword = () => {
    setWarningBorderPassword('1px solid gray');
    setOutlinePassword('2px solid #0060df');
  };

  const handleFocusOutPassword = (e) => {
    setOutlinePassword('none');
    if (e.target.value === '') {
      setWarningBorderPassword('1px solid #e0103a');
      setDisplayErrorPassword('block');
    }
    else {
      setDisplayErrorPassword('none');
    }
  };

  const handleClickUnhidePassword = (e) => {
    e.preventDefault();
    unhidePassword ? setUnhidePassword(false) : setUnhidePassword(true);
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
              value={valueLName}
              onChange={handleChangeLastName}
              onFocus={handleFocusLastName}
              onBlur={handleFocusOutLastName}
              style={{
                outline: outlineLName,
                border: warningBorderLName
              }}
            />
          </div>
        </div>
        <div
          className='sign-up-personal__first-and-last-name-errors'
          style={{
            display: namesErrorsContainer
          }}
        >
          <div
            className='sign-up-personal__first-name-error'
            style={{
              display: displayErrorFName
            }}
          >
            Please enter your first name
          </div>
          <div
            className='sign-up-personal__last-name-error'
            style={{
              display: displayErrorLName
            }}
          >
            Please enter your last name
          </div>
        </div>
        <div className='sign-up-personal__email'>
          <label htmlFor='sign-up-email'>Email</label>
          <input
            type='text'
            id='sign-up-email'
            className='sign-up-personal__input-email'
            value={valueEmail}
            onChange={handleChangeEmail}
            onFocus={handleFocusEmail}
            onBlur={handleFocusOutEmail}
            style={{
              outline: outlineEmail,
              border: warningBorderEmail
            }}
          />
        </div>
        <div
          className='sign-up-personal__email-error'
          style={{
            display: displayErrorEmail
          }}
        >
          Please enter your email address.
        </div>
        <div className='sign-up-personal__password'>
          <label htmlFor='sign-up-password'>Password</label>
          <input
            type={unhidePassword ? 'text' : 'password'}
            id='sign-up-password'
            className='sign-up-personal__input-password'
            value={valuePassword}
            onChange={handleChangePassword}
            onFocus={handleFocusPassword}
            onBlur={handleFocusOutPassword}
            style={{
              outline: outlinePassword,
              border: warningBorderPassword
            }}
          />
          <div
            className='sign-up-personal__password-unhide'
            onClick={handleClickUnhidePassword}
            onKeyDown={handleClickUnhidePassword}
            role='button'
            tabIndex='0'
          >
            {unhidePassword
              ? <VisibilityOutlinedIcon fontSize='small' />
              : <VisibilityOffOutlinedIcon fontSize='small' />}
          </div>
        </div>
        <div
          className='sign-up-personal__password-error'
          style={{
            display: displayErrorPassword
          }}
        >
          Please enter a password.
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