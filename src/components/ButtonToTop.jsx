import React, { useState, useEffect } from "react";
import "./buttonToTop.css";

function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className="btn-to-top" onClick={scrollToTop}>
        <ion-icon name="arrow-up-circle-outline"></ion-icon>
      </button>
    )
  );
}

export default ButtonToTop;
