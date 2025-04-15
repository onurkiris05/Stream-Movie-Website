import { useState, useEffect } from "react";
import "./comingSoon.css";
import ComingSoonSwiper from "../components/ComingSoonSwiper";

/* eslint-disable react/prop-types */
function ComingSoon({ data }) {
  const [comingMovies, setComingMovies] = useState([]);

  useEffect(() => {
    data && setComingMovies(data.filter((movie) => movie.type === "coming"));
  }, [data]);

  return (
    <section id="coming-soon" className="coming-soon">
      <h4 className="section-title">Coming Soon</h4>
      <ComingSoonSwiper comingMovies={comingMovies} />
    </section>
  );
}

export default ComingSoon;
