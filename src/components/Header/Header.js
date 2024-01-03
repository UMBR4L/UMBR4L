import React from 'react';
import './Header.scss';
import LogoImage from "../../assets/Images/logo/BrainFlix-logo.svg"
import SearchBar from '../SearchBar/SearchBar';
import UserAvatar from '../UserAvatar/UserAvatar';
import VideoUpload from '../VideoUpload/VideoUpload';

function Header() {
  return (
    <header className="header">
        <img src={LogoImage} alt="Logo" className="header__logo-image" />
      <SearchBar />
      <UserAvatar />
      <VideoUpload />
    </header>
  );
}

export default Header;