import React from 'react';
import './SelectCountryItem.css';

function SelectCountryItem({ children, sendToParent }) {
  const handleClick = () => {
    sendToParent(children);
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