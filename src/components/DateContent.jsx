import React from "react";
import "./dateContent.css";

function DateContent({ movie }) {
  return (
    <div className={`date ${movie.active ? "active" : ""}`}>
      <h2>On {movie.date}</h2>
    </div>
  );
}

export default DateContent;
