import React, { useState } from 'react';
import './SignUpBusiness.css';

function SignUpBusiness() {
  const [values, setValues] = useState({
    businessName: '',
    businessEmail: '',
    businessPassword: '',
    businessLocation: ''
  });

  const inputs = [
    {
      id: 'business-name',
      className: 'sign-up-business__input-business-name',
      type: 'text',
      name: 'businessName',
      
    }
  ]

  return (
    <form className='sign-up-business__form'>
      
    </form>
  );
}

export default SignUpBusiness;