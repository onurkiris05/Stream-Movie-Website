import React from "react";
import "./trailerContent.css";
import ButtonGlowPlay from "./ButtonGlowPlay";

function TrailerContent() {
  return (
    <div className="trailer-container active">
      <ButtonGlowPlay />
      <p>Watch Trailer</p>
    </div>
  );
}

export default TrailerContent;
