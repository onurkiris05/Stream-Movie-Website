import React from "react";
import "./trailerContent.css";
import ButtonGlowPlay from "./ButtonGlowPlay";

function TrailerContent({ movie }) {
  return (
    <div className={`trailer-container ${movie.active ? "active" : ""}`}>
      <ButtonGlowPlay />
      <p>Watch Trailer</p>
    </div>
  );
}

export default TrailerContent;
