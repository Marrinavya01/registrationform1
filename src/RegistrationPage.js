import React, { useState } from 'react';
import './RegistrationPage.css'; // Import CSS file for styles

function RegistrationPage() {
  // State variables to store form input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(''); // Radio button state
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false); // Checkbox state

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to submit the form data
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      password,
      gender,
      address,
      phoneNumber,
      agreeTerms,
    });
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setGender('');
    setAddress('');
    setPhoneNumber('');
    setAgreeTerms(false);
  };

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />{' '}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === 'other'}
                onChange={(e) => setGender(e.target.value)}
              />{' '}
              Other
            </label>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />{' '}
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" disabled={!agreeTerms}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;