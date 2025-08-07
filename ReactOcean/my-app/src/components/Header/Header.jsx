// src/components/TopNav.jsx
import React from 'react';
import AccLogo from '../../assets/icons/acc-logo.svg';
import './Header.css';
import ProfileLogo from '../../assets/icons/profile-icon.png';


const Header = () => {
  return (
    <div className='genwizard-header-wrapper'>
    <div className="GenWizard-header">
      <img src={AccLogo} className="acc-logo" alt="acc logo" />
      <h3>Genwizard</h3>
    </div>
    <div className='user-header'>
      <p>Rakesh Ranjan</p>
      <img src={ProfileLogo} className="user-logo"></img> 
    </div>
    </div>
  );
};

export default Header;
