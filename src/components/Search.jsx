import React from "react";
import "./search.css";

function Search() {
  return (
    <div className="search-bar">
      <ion-icon name="search-outline"></ion-icon>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default Search;
