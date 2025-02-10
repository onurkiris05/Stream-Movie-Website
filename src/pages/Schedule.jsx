import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../components/Card";
import filterList from "../data/filterList";
import FilterItem from "../components/FilterItem";

function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);
  const [activeFilter, setActiveFilter] = useState("All");

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
    setMovies(data);
  }, [data]);

  const handleFilterChange = (filterId) => {
    const newFilters = filters.map((filter) => ({
      ...filter,
      active: filterId === filter._id,
    }));
    setFilters(newFilters);
  };

  useEffect(() => {
    const selectedFilter = filters.find((filter) => filter.active);
    if (selectedFilter) {
      setActiveFilter(selectedFilter);
    }
  }, [filters]);

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <FilterItem key={filter.id} filterItem={filter} handleChange={handleFilterChange} />
            ))}
          </ul>
        </div>
        <div className="row mt-5">
          {movies &&
            movies.length > 0 &&
            movies
              .filter(
                (movie) => movie.category === activeFilter.name || activeFilter.name === "All"
              )
              .map((movie) => <Card key={movie._id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
