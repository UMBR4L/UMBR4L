import React from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/images/logo/BrainFlix-logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import UserAvatar from "../UserAvatar/UserAvatar";
import VideoUpload from "../VideoUpload/VideoUpload";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        {/* BrainFlix Logo  */}
        <img
          src={LogoImage}
          alt="BrainFlix Logo"
          className="header__logo-image"
        />
      </Link>
      <SearchBar />
      <UserAvatar cl/>
      <VideoUpload />
    </header>
  );
}

export default Header;
