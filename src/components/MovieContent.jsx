import React from "react";
import "./movieContent.css";
import Button from "./Button";

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : ""}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button-container">
        <Button style={{ background: "#fff", color: "var(--clr-primary)" }}>
          <ion-icon name="bookmark-outline"></ion-icon> Book
        </Button>
        <Button>
          <ion-icon name="add-outline"></ion-icon> My list
        </Button>
      </div>
    </div>
  );
}

export default MovieContent;
