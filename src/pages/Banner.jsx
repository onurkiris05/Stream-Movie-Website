import { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import DateContent from "../components/DateContent";
import TrailerContent from "../components/TrailerContent";
import MovieSwiper from "../components/MovieSwiper";

/* eslint-disable react/prop-types */
function Banner({ movieData }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData);
  }, [movieData]);

  const handleMovieChange = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie._id === movieId ? { ...movie, active: true } : { ...movie, active: false }
      )
    );
  };

  return (
    <div className="banner-container">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div key={movie._id} className="movie">
            <img
              src={movie.bgImg}
              alt="Backgorund Image"
              className={`bgImg ${movie.active ? "active" : ""}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <DateContent movie={movie} />
                  <TrailerContent movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper handleChange={handleMovieChange} movies={movies} />
      )}
    </div>
  );
}

export default Banner;
