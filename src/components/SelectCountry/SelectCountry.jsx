import React, { useState } from 'react';
import SelectCountryButton from '../SelectCountryButton/SelectCountryButton';
import SelectCountryContent from '../SelectCountryContent/SelectCountryContent';
import '../FormsInputs.css';
import './SelectCountry.css';

function SelectCountry({ buttonText, content }) {
  const [open, setOpen] = useState(false);

  const toogleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className='select-country'>
      <SelectCountryButton
        toggle={toogleDropdown}
      >
        {buttonText}
      </SelectCountryButton>
      <SelectCountryContent
        open={open}
      >
        {content}
      </SelectCountryContent>
    </div>
  );
}

export default SelectCountry;