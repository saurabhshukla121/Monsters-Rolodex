import React from "react";
import "./SearchBox-style.css";

export const SearchBox = ({ placeholder, handleChange, className }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
