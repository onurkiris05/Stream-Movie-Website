import "./main.css";
import Schedule from "./Schedule";
import ComingSoon from "./ComingSoon";
import Blog from "./Blog";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Main({ movieData, blogData }) {
  const [movies, setMovies] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setMovies(movieData);
    setBlogs(blogData);
  }, [movieData, blogData]);

  return (
    <main>
      <Schedule data={movies} />
      <ComingSoon data={movies} />
      <Blog data={blogs} />
    </main>
  );
}

export default Main;
