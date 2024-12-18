import React from 'react';
import './SelectCountryContent.css';

function SelectCountryContent({ children }) {
  return (
    <div className='select-country-content'>
      {children}
    </div>
  );
}

export default SelectCountryContent;