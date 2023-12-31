import React from 'react';
import './Header.scss';
import LogoImage from "../../assets/Logo/BrainFlix-logo.svg"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={LogoImage} alt="Logo" className="logo-image" />
      </div>
    </header>
  );
}

export default Header;