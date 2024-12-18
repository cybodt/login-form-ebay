import React, { useState } from 'react';
import './SignUpPersonalAndBusiness.css';
import { Link } from 'react-router-dom';
import FormsInputs from './FormsInputs';
import SelectCountry from './SelectCountry/SelectCountry';

function SignUpBusiness() {
  const [values, setValues] = useState({
    'business-name': '',
    'business-email': '',
    'business-password': ''
  });

  const inputs = [
    {
      id: 'business-name',
      className: 'sign-up-business__input-business-name',
      type: 'text',
      name: 'business-name',
      maxlength: 63,
      label: 'Business name',
      pattern: '^[a-zA-Z0-9]{3,}$',
      required: true,
      containerClassName: 'sign-up-business__business-name'
    },
    {
      id: 'business-email',
      className: 'sign-up-business__input-business-email',
      type: 'text',
      name: 'business-email',
      maxlength: 64,
      label: 'Business email',
      pattern: '^([a-zA-Z0-9_\\-.+])+@([a-zA-Z0-9_\\-.])+\\.([a-zA-Z]{2,})$',
      required: true,
      containerClassName: 'sign-up-business__business-email'
    },
    {
      id: 'business-password',
      className: 'sign-up-business__input-business-password',
      type: 'password',
      name: 'business-password',
      maxlength: 64,
      label: 'Password',
      // Minimum eight characters with at least one letter and one number or special character
      pattern: '^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*\\-])(?!.*?[^a-zA-Z0-9#?!@$%^&*\\-]).{8,}$',
      required: true,
      containerClassName: 'sign-up-business__business-password'
    }
  ];

  const countryOptions = [
    '',
    { code: '1', token: 'US', text: 'United States', translatedtext: 'United States' },
    { code: '2', token: 'CA', text: 'Canada', translatedtext: 'Canada' },
    { code: '3', token: 'GB', text: 'United Kingdom', translatedtext: 'United Kingdom' },
    { code: '4', token: 'AF', text: 'Afghanistan', translatedtext: 'Afghanistan' },
    { code: '5', token: 'AL', text: 'Albania', translatedtext: 'Albania' },
    { code: '6', token: 'DZ', text: 'Algeria', translatedtext: 'Algeria' },
    { code: '7', token: 'AS', text: 'American Samoa', translatedtext: 'American Samoa' },
    { code: '8', token: 'AD', text: 'Andorra', translatedtext: 'Andorra' },
    { code: '9', token: 'AO', text: 'Angola', translatedtext: 'Angola' },
    { code: '10', token: 'AI', text: 'Anguilla', translatedtext: 'Anguilla' },
    { code: '11', token: 'AG', text: 'Antigua and Barbuda', translatedtext: 'Antigua and Barbuda' },
    { code: '12', token: 'AR', text: 'Argentina', translatedtext: 'Argentina' },
    { code: '13', token: 'AM', text: 'Armenia', translatedtext: 'Armenia' },
    { code: '14', token: 'AW', text: 'Aruba', translatedtext: 'Aruba' },
    { code: '15', token: 'AU', text: 'Australia', translatedtext: 'Australia' },
    { code: '16', token: 'AT', text: 'Austria', translatedtext: 'Austria' },
    { code: '17', token: 'AZ', text: 'Azerbaijan Republic', translatedtext: 'Azerbaijan Republic' },
    { code: '18', token: 'BS', text: 'Bahamas', translatedtext: 'Bahamas' },
    { code: '19', token: 'BH', text: 'Bahrain', translatedtext: 'Bahrain' },
    { code: '20', token: 'BD', text: 'Bangladesh', translatedtext: 'Bangladesh' },
    { code: '21', token: 'BB', text: 'Barbados', translatedtext: 'Barbados' },
    { code: '22', token: 'BY', text: 'Belarus', translatedtext: 'Belarus' },
    { code: '23', token: 'BE', text: 'Belgium', translatedtext: 'Belgium' },
    { code: '24', token: 'BZ', text: 'Belize', translatedtext: 'Belize' },
    { code: '25', token: 'BJ', text: 'Benin', translatedtext: 'Benin' },
    { code: '26', token: 'BM', text: 'Bermuda', translatedtext: 'Bermuda' },
    { code: '27', token: 'BT', text: 'Bhutan', translatedtext: 'Bhutan' },
    { code: '28', token: 'BO', text: 'Bolivia', translatedtext: 'Bolivia' },
    { code: '29', token: 'BA', text: 'Bosnia and Herzegovina', translatedtext: 'Bosnia and Herzegovina' },
    { code: '30', token: 'BW', text: 'Botswana', translatedtext: 'Botswana' },
    { code: '31', token: 'BR', text: 'Brazil', translatedtext: 'Brazil' },
    { code: '32', token: 'IO', text: 'British Virgin Islands', translatedtext: 'British Virgin Islands' },
    { code: '33', token: 'BN', text: 'Brunei Darussalam', translatedtext: 'Brunei Darussalam' },
    { code: '34', token: 'BG', text: 'Bulgaria', translatedtext: 'Bulgaria' },
    { code: '35', token: 'BF', text: 'Burkina Faso', translatedtext: 'Burkina Faso' },
    { code: '37', token: 'BI', text: 'Burundi', translatedtext: 'Burundi' },
    { code: '38', token: 'KH', text: 'Cambodia', translatedtext: 'Cambodia' },
    { code: '39', token: 'CM', text: 'Cameroon', translatedtext: 'Cameroon' },
    { code: '2', token: 'CA', text: 'Canada', translatedtext: 'Canada' },
    { code: '40', token: 'CV', text: 'Cape Verde Islands', translatedtext: 'Cape Verde Islands' },
    { code: '41', token: 'KY', text: 'Cayman Islands', translatedtext: 'Cayman Islands' },
    { code: '42', token: 'CF', text: 'Central African Republic', translatedtext: 'Central African Republic' },
    { code: '43', token: 'TD', text: 'Chad', translatedtext: 'Chad' },
    { code: '44', token: 'CL', text: 'Chile', translatedtext: 'Chile' },
    { code: '45', token: 'CN', text: 'China Mainland', translatedtext: 'China Mainland' },
    { code: '46', token: 'CO', text: 'Colombia', translatedtext: 'Colombia' },
    { code: '47', token: 'KM', text: 'Comoros', translatedtext: 'Comoros' },
    { code: '48', token: 'CD', text: 'Congo, Democratic Republic of the', translatedtext: 'Congo, Democratic Republic of the' },
    { code: '49', token: 'CG', text: 'Congo, Republic of the', translatedtext: 'Congo, Republic of the' },
    { code: '50', token: 'CK', text: 'Cook Islands', translatedtext: 'Cook Islands' },
    { code: '51', token: 'CR', text: 'Costa Rica', translatedtext: 'Costa Rica' },
    { code: '52', token: 'CI', text: 'Cote d Ivoire (Ivory Coast)', translatedtext: 'Cote d Ivoire (Ivory Coast)' },
    { code: '53', token: 'HR', text: 'Croatia, Republic of', translatedtext: 'Croatia, Republic of' },
    { code: '4007', token: 'CW', text: 'Curacao', translatedtext: 'Curacao' },
    { code: '55', token: 'CY', text: 'Cyprus', translatedtext: 'Cyprus' },
    { code: '56', token: 'CZ', text: 'Czech Republic', translatedtext: 'Czech Republic' },
    { code: '57', token: 'DK', text: 'Denmark', translatedtext: 'Denmark' },
    { code: '58', token: 'DJ', text: 'Djibouti', translatedtext: 'Djibouti' },
    { code: '59', token: 'DM', text: 'Dominica', translatedtext: 'Dominica' },
    { code: '60', token: 'DO', text: 'Dominican Republic', translatedtext: 'Dominican Republic' },
    { code: '61', token: 'EC', text: 'Ecuador', translatedtext: 'Ecuador' },
    { code: '62', token: 'EG', text: 'Egypt', translatedtext: 'Egypt' },
    { code: '63', token: 'SV', text: 'El Salvador', translatedtext: 'El Salvador' },
    { code: '64', token: 'GQ', text: 'Equatorial Guinea', translatedtext: 'Equatorial Guinea' },
    { code: '65', token: 'ER', text: 'Eritrea', translatedtext: 'Eritrea' },
    { code: '66', token: 'EE', text: 'Estonia', translatedtext: 'Estonia' },
    { code: '67', token: 'ET', text: 'Ethiopia', translatedtext: 'Ethiopia' },
    { code: '68', token: 'FK', text: 'Falkland Islands (Islas Malvinas)', translatedtext: 'Falkland Islands (Islas Malvinas)' },
    { code: '69', token: 'FJ', text: 'Fiji', translatedtext: 'Fiji' },
    { code: '70', token: 'FI', text: 'Finland', translatedtext: 'Finland' },
    { code: '71', token: 'FR', text: 'France', translatedtext: 'France' },
    { code: '72', token: 'GF', text: 'French Guiana', translatedtext: 'French Guiana' },
    { code: '73', token: 'PF', text: 'French Polynesia', translatedtext: 'French Polynesia' },
    { code: '74', token: 'GA', text: 'Gabon Republic', translatedtext: 'Gabon Republic' },
    { code: '75', token: 'GM', text: 'Gambia', translatedtext: 'Gambia' },
    { code: '76', token: 'GE', text: 'Georgia', translatedtext: 'Georgia' },
    { code: '77', token: 'DE', text: 'Germany', translatedtext: 'Germany' },
    { code: '78', token: 'GH', text: 'Ghana', translatedtext: 'Ghana' },
    { code: '79', token: 'GI', text: 'Gibraltar', translatedtext: 'Gibraltar' },
    { code: '80', token: 'GR', text: 'Greece', translatedtext: 'Greece' },
    { code: '81', token: 'GL', text: 'Greenland', translatedtext: 'Greenland' },
    { code: '82', token: 'GD', text: 'Grenada', translatedtext: 'Grenada' },
    { code: '83', token: 'GP', text: 'Guadeloupe', translatedtext: 'Guadeloupe' },
    { code: '84', token: 'GU', text: 'Guam', translatedtext: 'Guam' },
    { code: '85', token: 'GT', text: 'Guatemala', translatedtext: 'Guatemala' },
    { code: '86', token: 'GG', text: 'Guernsey', translatedtext: 'Guernsey' },
    { code: '87', token: 'GN', text: 'Guinea', translatedtext: 'Guinea' },
    { code: '88', token: 'GW', text: 'Guinea-Bissau', translatedtext: 'Guinea-Bissau' },
    { code: '89', token: 'GY', text: 'Guyana', translatedtext: 'Guyana' },
    { code: '90', token: 'HT', text: 'Haiti', translatedtext: 'Haiti' },
    { code: '91', token: 'HN', text: 'Honduras', translatedtext: 'Honduras' },
    { code: '92', token: 'HK', text: 'Hong Kong', translatedtext: 'Hong Kong' },
    { code: '93', token: 'HU', text: 'Hungary', translatedtext: 'Hungary' },
    { code: '94', token: 'IS', text: 'Iceland', translatedtext: 'Iceland' },
    { code: '95', token: 'IN', text: 'India', translatedtext: 'India' },
    { code: '96', token: 'ID', text: 'Indonesia', translatedtext: 'Indonesia' },
    { code: '99', token: 'IE', text: 'Ireland', translatedtext: 'Ireland' },
    { code: '100', token: 'IL', text: 'Israel', translatedtext: 'Israel' },
    { code: '101', token: 'IT', text: 'Italy', translatedtext: 'Italy' },
    { code: '102', token: 'JM', text: 'Jamaica', translatedtext: 'Jamaica' },
    { code: '103', token: 'JN', text: 'Jan Mayen', translatedtext: 'Jan Mayen' },
    { code: '104', token: 'JP', text: 'Japan', translatedtext: 'Japan' },
    { code: '105', token: 'JE', text: 'Jersey', translatedtext: 'Jersey' },
    { code: '106', token: 'JO', text: 'Jordan', translatedtext: 'Jordan' },
    { code: '107', token: 'KZ', text: 'Kazakhstan', translatedtext: 'Kazakhstan' },
    { code: '108', token: 'KE', text: 'Kenya', translatedtext: 'Kenya' },
    { code: '109', token: 'KI', text: 'Kiribati', translatedtext: 'Kiribati' },
    { code: '111', token: 'KR', text: 'Korea, South', translatedtext: 'Korea, South' },
    { code: '112', token: 'KW', text: 'Kuwait', translatedtext: 'Kuwait' },
    { code: '113', token: 'KG', text: 'Kyrgyzstan', translatedtext: 'Kyrgyzstan' },
    { code: '114', token: 'LA', text: 'Laos', translatedtext: 'Laos' },
    { code: '115', token: 'LV', text: 'Latvia', translatedtext: 'Latvia' },
    { code: '116', token: 'LB', text: 'Lebanon', translatedtext: 'Lebanon' },
    { code: '120', token: 'LI', text: 'Liechtenstein', translatedtext: 'Liechtenstein' },
    { code: '121', token: 'LT', text: 'Lithuania', translatedtext: 'Lithuania' },
    { code: '122', token: 'LU', text: 'Luxembourg', translatedtext: 'Luxembourg' },
    { code: '123', token: 'MO', text: 'Macau', translatedtext: 'Macau' },
    { code: '124', token: 'MK', text: 'Macedonia', translatedtext: 'Macedonia' },
    { code: '125', token: 'MG', text: 'Madagascar', translatedtext: 'Madagascar' },
    { code: '126', token: 'MW', text: 'Malawi', translatedtext: 'Malawi' },
    { code: '127', token: 'MY', text: 'Malaysia', translatedtext: 'Malaysia' },
    { code: '128', token: 'MV', text: 'Maldives', translatedtext: 'Maldives' },
    { code: '129', token: 'ML', text: 'Mali', translatedtext: 'Mali' },
    { code: '130', token: 'MT', text: 'Malta', translatedtext: 'Malta' },
    { code: '131', token: 'MH', text: 'Marshall Islands', translatedtext: 'Marshall Islands' },
    { code: '132', token: 'MQ', text: 'Martinique', translatedtext: 'Martinique' },
    { code: '133', token: 'MR', text: 'Mauritania', translatedtext: 'Mauritania' },
    { code: '134', token: 'MU', text: 'Mauritius', translatedtext: 'Mauritius' },
    { code: '135', token: 'YT', text: 'Mayotte', translatedtext: 'Mayotte' },
    { code: '136', token: 'MX', text: 'Mexico', translatedtext: 'Mexico' },
    { code: '226', token: 'FM', text: 'Micronesia', translatedtext: 'Micronesia' },
    { code: '137', token: 'MD', text: 'Moldova', translatedtext: 'Moldova' },
    { code: '138', token: 'MC', text: 'Monaco', translatedtext: 'Monaco' },
    { code: '139', token: 'MN', text: 'Mongolia', translatedtext: 'Mongolia' },
    { code: '228', token: 'ME', text: 'Montenegro', translatedtext: 'Montenegro' },
    { code: '140', token: 'MS', text: 'Montserrat', translatedtext: 'Montserrat' },
    { code: '141', token: 'MA', text: 'Morocco', translatedtext: 'Morocco' },
    { code: '142', token: 'MZ', text: 'Mozambique', translatedtext: 'Mozambique' },
    { code: '143', token: 'NA', text: 'Namibia', translatedtext: 'Namibia' },
    { code: '144', token: 'NR', text: 'Nauru', translatedtext: 'Nauru' },
    { code: '145', token: 'NP', text: 'Nepal', translatedtext: 'Nepal' },
    { code: '146', token: 'NL', text: 'Netherlands', translatedtext: 'Netherlands' },
    { code: '147', token: 'AN', text: 'Netherlands Antilles', translatedtext: 'Netherlands Antilles' },
    { code: '148', token: 'NC', text: 'New Caledonia', translatedtext: 'New Caledonia' },
    { code: '149', token: 'NZ', text: 'New Zealand', translatedtext: 'New Zealand' },
    { code: '150', token: 'NI', text: 'Nicaragua', translatedtext: 'Nicaragua' },
    { code: '151', token: 'NE', text: 'Niger', translatedtext: 'Niger' },
    { code: '152', token: 'NG', text: 'Nigeria', translatedtext: 'Nigeria' },
    { code: '153', token: 'NU', text: 'Niue', translatedtext: 'Niue' },
    { code: '154', token: 'NO', text: 'Norway', translatedtext: 'Norway' },
    { code: '155', token: 'OM', text: 'Oman', translatedtext: 'Oman' },
    { code: '156', token: 'PK', text: 'Pakistan', translatedtext: 'Pakistan' },
    { code: '157', token: 'PW', text: 'Palau', translatedtext: 'Palau' },
    { code: '158', token: 'PA', text: 'Panama', translatedtext: 'Panama' },
    { code: '159', token: 'PG', text: 'Papua New Guinea', translatedtext: 'Papua New Guinea' },
    { code: '160', token: 'PY', text: 'Paraguay', translatedtext: 'Paraguay' },
    { code: '161', token: 'PE', text: 'Peru', translatedtext: 'Peru' },
    { code: '162', token: 'PH', text: 'Philippines', translatedtext: 'Philippines' },
    { code: '163', token: 'PL', text: 'Poland', translatedtext: 'Poland' },
    { code: '164', token: 'PT', text: 'Portugal', translatedtext: 'Portugal' },
    { code: '165', token: 'PR', text: 'Puerto Rico', translatedtext: 'Puerto Rico' },
    { code: '166', token: 'QA', text: 'Qatar', translatedtext: 'Qatar' },
    { code: '227', token: 'RE', text: 'Reunion', translatedtext: 'Reunion' },
    { code: '167', token: 'RO', text: 'Romania', translatedtext: 'Romania' },
    { code: '169', token: 'RW', text: 'Rwanda', translatedtext: 'Rwanda' },
    { code: '170', token: 'SH', text: 'Saint Helena', translatedtext: 'Saint Helena' },
    { code: '171', token: 'KN', text: 'Saint Kitts-Nevis', translatedtext: 'Saint Kitts-Nevis' },
    { code: '172', token: 'LC', text: 'Saint Lucia', translatedtext: 'Saint Lucia' },
    { code: '173', token: 'PM', text: 'Saint Pierre and Miquelon', translatedtext: 'Saint Pierre and Miquelon' },
    { code: '174', token: 'VC', text: 'Saint Vincent and the Grenadines', translatedtext: 'Saint Vincent and the Grenadines' },
    { code: '175', token: 'SM', text: 'San Marino', translatedtext: 'San Marino' },
    { code: '176', token: 'SA', text: 'Saudi Arabia', translatedtext: 'Saudi Arabia' },
    { code: '177', token: 'SN', text: 'Senegal', translatedtext: 'Senegal' },
    { code: '229', token: 'RS', text: 'Serbia', translatedtext: 'Serbia' },
    { code: '178', token: 'SC', text: 'Seychelles', translatedtext: 'Seychelles' },
    { code: '179', token: 'SL', text: 'Sierra Leone', translatedtext: 'Sierra Leone' },
    { code: '180', token: 'SG', text: 'Singapore', translatedtext: 'Singapore' },
    { code: '181', token: 'SK', text: 'Slovakia', translatedtext: 'Slovakia' },
    { code: '182', token: 'SI', text: 'Slovenia', translatedtext: 'Slovenia' },
    { code: '183', token: 'SB', text: 'Solomon Islands', translatedtext: 'Solomon Islands' },
    { code: '184', token: 'SO', text: 'Somalia', translatedtext: 'Somalia' },
    { code: '185', token: 'ZA', text: 'South Africa', translatedtext: 'South Africa' },
    { code: '186', token: 'ES', text: 'Spain', translatedtext: 'Spain' },
    { code: '187', token: 'LK', text: 'Sri Lanka', translatedtext: 'Sri Lanka' },
    { code: '189', token: 'SR', text: 'Suriname', translatedtext: 'Suriname' },
    { code: '190', token: 'SJ', text: 'Svalbard', translatedtext: 'Svalbard' },
    { code: '191', token: 'SZ', text: 'Swaziland', translatedtext: 'Swaziland' },
    { code: '192', token: 'SE', text: 'Sweden', translatedtext: 'Sweden' },
    { code: '193', token: 'CH', text: 'Switzerland', translatedtext: 'Switzerland' },
    { code: '195', token: 'TA', text: 'Tahiti', translatedtext: 'Tahiti' },
    { code: '196', token: 'TW', text: 'Taiwan', translatedtext: 'Taiwan' },
    { code: '197', token: 'TJ', text: 'Tajikistan', translatedtext: 'Tajikistan' },
    { code: '198', token: 'TZ', text: 'Tanzania', translatedtext: 'Tanzania' },
    { code: '199', token: 'TH', text: 'Thailand', translatedtext: 'Thailand' },
    { code: '200', token: 'TG', text: 'Togo', translatedtext: 'Togo' },
    { code: '201', token: 'TO', text: 'Tonga', translatedtext: 'Tonga' },
    { code: '202', token: 'TT', text: 'Trinidad and Tobago', translatedtext: 'Trinidad and Tobago' },
    { code: '203', token: 'TN', text: 'Tunisia', translatedtext: 'Tunisia' },
    { code: '204', token: 'TR', text: 'Turkey', translatedtext: 'Turkey' },
    { code: '205', token: 'TM', text: 'Turkmenistan', translatedtext: 'Turkmenistan' },
    { code: '206', token: 'TC', text: 'Turks and Caicos Islands', translatedtext: 'Turks and Caicos Islands' },
    { code: '207', token: 'TV', text: 'Tuvalu', translatedtext: 'Tuvalu' },
    { code: '208', token: 'UG', text: 'Uganda', translatedtext: 'Uganda' },
    { code: '209', token: 'UA', text: 'Ukraine', translatedtext: 'Ukraine' },
    { code: '210', token: 'AE', text: 'United Arab Emirates', translatedtext: 'United Arab Emirates' },
    { code: '3', token: 'GB', text: 'United Kingdom', translatedtext: 'United Kingdom' },
    { code: '1', token: 'US', text: 'United States', translatedtext: 'United States' },
    { code: '211', token: 'UY', text: 'Uruguay', translatedtext: 'Uruguay' },
    { code: '212', token: 'UZ', text: 'Uzbekistan', translatedtext: 'Uzbekistan' },
    { code: '213', token: 'VU', text: 'Vanuatu', translatedtext: 'Vanuatu' },
    { code: '214', token: 'VA', text: 'Vatican City State', translatedtext: 'Vatican City State' },
    { code: '215', token: 'VE', text: 'Venezuela', translatedtext: 'Venezuela' },
    { code: '216', token: 'VN', text: 'Vietnam', translatedtext: 'Vietnam' },
    { code: '217', token: 'VI', text: 'Virgin Islands (U.S.)', translatedtext: 'Virgin Islands (U.S.)' },
    { code: '218', token: 'WF', text: 'Wallis and Futuna', translatedtext: 'Wallis and Futuna' },
    { code: '219', token: 'EH', text: 'Western Sahara', translatedtext: 'Western Sahara' },
    { code: '220', token: 'WS', text: 'Western Samoa', translatedtext: 'Western Samoa' },
    { code: '221', token: 'YE', text: 'Yemen', translatedtext: 'Yemen' },
    { code: '223', token: 'ZM', text: 'Zambia', translatedtext: 'Zambia' },
    { code: '224', token: 'ZW', text: 'Zimbabwe', translatedtext: 'Zimbabwe' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='sign-up-business__form'
    >
      <div className='sign-up-business__description'>
        <p>
          Continue to register as a <b>business or nonprofit</b>, or if you plan to sell a large number of goods.
        </p>
      </div>
      {inputs.map(input => (
        <FormsInputs
          key={input.id}
          value={values[input.name]}
          onChange={handleChange}
          extraProps={input}
        />
      ))}
      <SelectCountry
        buttonText='Where is your business registered?'
        content={<p>Hello world!</p>}
      />
      <div className='sign-up-business__checkbox-wrapper'>
        <input
          type='checkbox'
          id='biz-only-to-buy'
          className='sign-up-business__checkbox-input'
          name='biz-only-to-buy'
        />
        <label
          htmlFor='biz-only-to-buy'
          className='sign-up-business__checkbox-label'
        >
          I’m only interested in buying on eBay for now
        </label>
      </div>
      <div className='sign-up__agreement-and-notice'>
        <p>
          By selecting <b>Create business account</b>, you agree to our <Link className='sign-up__agreement-and-notice-links' to='/user-agreement'>User Agreement</Link> and acknowledge reading our <Link className='sign-up__agreement-and-notice-links' to='/user-privacy-notice'>User Privacy Notice</Link>.
        </p>
      </div>
      <button
        type='submit'
        className='sign-up-business__create-business-account-button'
      >Create business account
      </button>
    </form>
  );
}

export default SignUpBusiness;