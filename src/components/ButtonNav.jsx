import React, { useState } from "react";
import "./buttonNav.css";

function ButtonNav({ children, onClick, className = "", style }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <button
      className={`btn-nav ${className}`}
      onClick={() => {
        toggleActive();
        onClick();
      }}
      style={style}
    >
      {isActive ? (
        <ion-icon name="close-outline"></ion-icon>
      ) : (
        <ion-icon name="menu-outline"></ion-icon>
      )}
      {children}
    </button>
  );
}

export default ButtonNav;
