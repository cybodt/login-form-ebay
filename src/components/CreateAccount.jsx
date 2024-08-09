import React, { useState } from 'react';
import './CreateAccount.css';
import SignUpPersonal from './SignUpPersonal';
import SignUpBusiness from './SignUpBusiness';

function CreateAccount() {
  const styleSelect = ({
    active: { color: '#fff', backgroundColor: '#191919' },
    inactive: { color: '#000', backgroundColor: '#fff' }
  });

  const [chooseType, setChooseType] = useState({
    typePersonal: styleSelect.active,
    typeBusiness: styleSelect.inactive
  });

  const [activeType, setActiveType] = useState({
    activePersonal: true,
    activeBusiness: false
  });

  const handleChoose = (e) => {
    if (e.target.value === 'personal') {
      setChooseType({
        typePersonal: styleSelect.active,
        typeBusiness: styleSelect.inactive
      });
      setActiveType({
        activePersonal: true,
        activeBusiness: false
      });
    }
    else {
      setChooseType({
        typePersonal: styleSelect.inactive,
        typeBusiness: styleSelect.active
      });
      setActiveType({
        activePersonal: false,
        activeBusiness: true
      });
    }
  };

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
            value='personal'
            onClick={handleChoose}
            style={chooseType.typePersonal}
          >
            Personal
          </button>
          <button
            type='button'
            className='create-account__choose-business'
            value='business'
            onClick={handleChoose}
            style={chooseType.typeBusiness}
          >
            Business
          </button>
        </div>
        {activeType.activePersonal && <SignUpPersonal />}
        {activeType.activeBusiness && <SignUpBusiness />}
      </div>
    </div>
  );
}

export default CreateAccount;