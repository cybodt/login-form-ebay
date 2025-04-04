import React from 'react';
import './SelectCountryItem.css';

function SelectCountryItem({ children, sendToParent, toggle }) {
  const handleClick = () => {
    sendToParent(children);
    toggle();
  };

  return (
    <button
      className='select-country-item'
      type='button'
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default SelectCountryItem;