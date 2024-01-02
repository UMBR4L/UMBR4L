import React from 'react';
import './Header.scss';
import LogoImage from "../../assets/images/logo/BrainFlix-logo.svg"
import SearchBar from '../SearchBar/SearchBar';
import UserAvatar from '../UserAvatar/UserAvatar';
import VideoUpload from '../VideoUpload/VideoUpload';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={LogoImage} alt="Logo" className="logo-image" />
      </div>
      <SearchBar />
      <UserAvatar />
      <VideoUpload />
    </header>
  );
}

export default Header;