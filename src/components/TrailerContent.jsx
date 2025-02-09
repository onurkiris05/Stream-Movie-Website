import React, { useState } from "react";
import "./trailerContent.css";
import ButtonGlowPlay from "./ButtonGlowPlay";
import TrailerModal from "./TrailerModal";

function TrailerContent({ movie }) {
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => setIsActive(!isActive);

  return (
    <>
      <div className={`trailer-container ${movie.active ? "active" : ""}`}>
        <ButtonGlowPlay onClick={toggleModal} />
        <p>Watch Trailer</p>
      </div>
      {movie.active && <TrailerModal movie={movie} isActive={isActive} toggleModal={toggleModal} />}
    </>
  );
}

export default TrailerContent;
