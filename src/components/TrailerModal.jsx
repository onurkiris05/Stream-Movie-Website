import React from "react";
import "./trailerModal.css";

function TrailerModal({ movie, isActive, toggleModal }) {
  /**
   * Reloads all iframes on the page, effectively stopping any embedded videos
   * from playing.
   */
  const stopVideo = () => {
    document.querySelectorAll("iframe").forEach((v) => {
      v.src = v.src;
    });
  };

  return (
    <div className={`trailer-modal-container ${isActive ? "active" : ""}`}>
      <button
        onClick={() => {
          toggleModal();
          stopVideo();
        }}
      >
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <iframe
        width="70%"
        height="70%"
        src={movie.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default TrailerModal;
