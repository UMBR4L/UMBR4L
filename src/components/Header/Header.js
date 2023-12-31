// Header.js

import React from 'react';
import './Header.scss'; // Import your Sass file for styling
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="path/to/your/logo.png" alt="BrainFlix Logo" />
      </div>
      <SearchBar/>
      <div className="header__user-profile">
        <img src="path/to/your/profile-picture.jpg" alt="User Profile" />
      </div>
      <button className="header__upload-button">Upload</button>
    </header>
  );
};

export default Header;
