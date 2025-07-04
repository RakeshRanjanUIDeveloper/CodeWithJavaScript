import React, { useState } from 'react';

// ✅ Helper function to evaluate password strength
export const checkPasswordStrength = (password) => {
  let criteriaMet = 0;

  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password); // Any non-alphanumeric character

  // Count criteria met
  if (hasLength) criteriaMet++;
  if (hasUppercase) criteriaMet++;
  if (hasLowercase) criteriaMet++;
  if (hasNumber) criteriaMet++;
  if (hasSpecialChar) criteriaMet++;

  // Return strength level
  if (criteriaMet === 0) return "Weak Password";
  if (criteriaMet === 1) return "Level 1";
  if (criteriaMet === 2 || criteriaMet === 3) return "Level 2";
  if (criteriaMet >= 4) return "Level 3";
};

const PasswordStrength = () => {
  const [inputValue, setInputValue] = useState('');
  const [strength, setStrength] = useState('');

  const handleStrengthCheck = () => {
    const result = checkPasswordStrength(inputValue);
    setStrength(result);
  };

  return (
    <div className='password-container' style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Password Strength Checker</h2>
      <input
        type='text'
        placeholder='Enter Password'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleStrengthCheck} style={{ padding: '0.5rem 1rem' }}>
        Check Strength
      </button>
      <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{strength}</p>
    </div>
  );
};

export default PasswordStrength;
