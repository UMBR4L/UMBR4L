import React from "react";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <form className="form-field">
      <input type="text" className="form-label" placeholder="Search"></input>
    </form>
  );
}

export default SearchBar;
