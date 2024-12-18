import React from 'react';
import SelectCountryButton from '../SelectCountryButton/SelectCountryButton';
import SelectCountryContent from '../SelectCountryContent/SelectCountryContent';
import '../FormsInputs.css';
import './SelectCountry.css';

function SelectCountry({ buttonText, content }) {
  return (
    <div className='select-country'>
      <SelectCountryButton>
        {buttonText}
      </SelectCountryButton>
      <SelectCountryContent>
        {content}
      </SelectCountryContent>
    </div>
  );
}

export default SelectCountry;