import React from "react";
import "./buttonGlowPlay.css";

function ButtonGlowPlay({ children, onClick, className = "", style }) {
  return (
    <button className={`btn-glow-play ${className}`} onClick={onClick} style={style}>
      <ion-icon name="play-outline"></ion-icon>
      {children}
    </button>
  );
}

export default ButtonGlowPlay;
