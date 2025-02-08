import React from "react";
import "./movieContent.css";
import bgTransformerTitle from "../assets/movies/transformer-title.png";
import Button from "./Button";

function MovieContent() {
  return (
    <div className="content active">
      <img src={bgTransformerTitle} alt="Movie Title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>
          <i>Age</i>
        </span>
        <span>Lenght</span>
        <span>Category</span>
      </h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero labore voluptates inventore
        voluptate fuga fugiat non unde maiores? Facere corporis debitis fugit voluptatibus eaque
        ipsa soluta molestiae atque sit. Soluta vel, illo veniam voluptate expedita quam dolore.
        Dicta recusandae possimus, voluptates rem sapiente maiores est maxime illum sint ex a.
      </p>
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
