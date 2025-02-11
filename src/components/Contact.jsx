import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h3 className="contact__title">Contact us</h3>
      <div className="contact__info">
        <p>Street Name</p>
        <p>City name, State 22235</p>
        <p>Turkey</p>
        <br />
        <p>
          <strong>Phone:</strong> +90544 553 6666
        </p>
        <p>
          <strong>Email:</strong> onurkiris05@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
