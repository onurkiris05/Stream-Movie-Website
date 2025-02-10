import React from "react";
import "./comingSoonCard.css";
import ButtonMain from "./ButtonMain";

function ComingSoonCard({ movie }) {
  return (
    <div className="card-container">
      <img src={movie.previewImg} alt={`Preview Image: ${movie.title}`} />
      <ButtonMain
        style={{ marginRight: "0", fontSize: "1rem", width: "100%", padding: "0.3rem 1rem" }}
      >
        Set Reminder <ion-icon name="calendar-outline"></ion-icon>
      </ButtonMain>
    </div>
  );
}

export default ComingSoonCard;
