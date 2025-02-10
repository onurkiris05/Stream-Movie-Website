import React from "react";
import "./filterItem.css";

function FilterItem({ filterItem, handleChange }) {
  return (
    <li
      className={`filter-item ${filterItem.active ? "active" : ""}`}
      onClick={() => handleChange(filterItem._id)}
    >
      <button>{filterItem.name}</button>
    </li>
  );
}

export default FilterItem;
