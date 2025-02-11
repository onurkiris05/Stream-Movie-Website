import React from "react";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="footer-nav__about-us">
      <h1>cinema</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque iusto explicabo
        laudantium! Ipsa adipisci illo voluptas at, ratione corporis.
      </p>
      <div className="footer-nav__social-icons">
        <a href="">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
