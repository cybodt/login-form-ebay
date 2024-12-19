import React from 'react';
import './SelectCountryContent.css';

function SelectCountryContent({ children, open }) {
  return (
    <div
      className={
        `select-country-content 
      ${open ? 'select-country-content__open' : null}`
      }
    >
      {children}
    </div>
  );
}

export default SelectCountryContent;