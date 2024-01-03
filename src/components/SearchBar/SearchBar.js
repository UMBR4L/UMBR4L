import React from "react";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <form className="form-field header__searchbar-form">
      <input type="text" className="header__searchbar-input labels-buttons" placeholder="Search"></input>
    </form>
  );
}

export default SearchBar;
