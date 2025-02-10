import React from "react";
import "./buttonMain.css";

function ButtonMain({ children, onClick, className = "", style }) {
  return (
    <button className={`btn-main ${className}`} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default ButtonMain;
