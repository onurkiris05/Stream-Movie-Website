import React from "react";
import "./button.css";

function Button({ children, onClick, className = "", style }) {
  return (
    <button className={`btn-main ${className}`} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
