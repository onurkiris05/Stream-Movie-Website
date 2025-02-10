import React, { useState, useEffect } from "react";
import "./comingSoon.css";
import ComingSoonSwiper from "../components/ComingSoonSwiper";

function ComingSoon() {
  const [data, setData] = useState([]);
  const [comingMovies, setComingMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setComingMovies(data.filter((movie) => movie.type === "coming"));
  }, [data]);

  return (
    <section id="coming-soon" className="coming-soon">
      <h4 className="section-title">Coming Soon</h4>
      <ComingSoonSwiper comingMovies={comingMovies} />
    </section>
  );
}

export default ComingSoon;
