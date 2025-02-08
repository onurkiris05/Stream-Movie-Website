import React, { useState, useEffect } from "react";
import "./banner.css";
import bgTransformer from "../assets/movies/bg-transformer.jpg";
import MovieContent from "../components/MovieContent";
import DateContent from "../components/DateContent";
import TrailerContent from "../components/TrailerContent";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner-container">
      <div className="movie">
        <img src={bgTransformer} alt="Backgorund Image" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MovieContent />
            </div>
            <div className="col-lg-6 col-md-12">
              <DateContent />
              <TrailerContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
