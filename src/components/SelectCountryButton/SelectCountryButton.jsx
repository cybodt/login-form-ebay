import React from 'react';
import './SelectCountryButton.css';
import '../FormsInputs.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SelectCountryButton({ children, toggle }) {
  return (
    <button
      className='select-country-btn'
      type='button'
      onClick={toggle}
    >
      {children}
      <span className='select-country-btn__toggle-icon'>
        <ExpandMoreIcon sx={{ fontSize: 17 }} />
      </span>
    </button>
  );
}

export default SelectCountryButton;