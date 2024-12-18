import React from 'react';
import './SelectCountryButton.css';
import '../FormsInputs.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SelectCountryButton({ children }) {
  return (
    <div className='select-country-btn'>
      {children}
      <span className='select-country-btn__toggle-icon'>
        <ExpandMoreIcon sx={{ fontSize: 17 }} />
      </span>
    </div>
  );
}

export default SelectCountryButton;