import React, { useEffect, useState } from "react";
import { fakeMoviesFetch } from "./api/fakeMoviesFetch";

const Movies = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    fakeMoviesFetch("https://example.com/api/movies")
      .then((res) => {
        setMoviesDetails(res.data);
        setFilteredMovies(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    console.log(selectedYear)
    if (selectedYear === "All") {
      setFilteredMovies(moviesDetails);
    } else {
      const filteredData = moviesDetails.filter((m) => m.year.toString() === selectedYear);
      console.log(filteredData);
      setFilteredMovies(filteredData);
    }
  };
  return (
    <React.Fragment>
      <h3>Movies</h3>
      <div>
        <label>Filter By Year : </label>
        <select onChange={handleYearChange}>
          <option value="All">All</option>
          {moviesDetails.map((m) => (
            <option value={m.year}>{m.year}</option>
          ))}
        </select>
      </div>
      <div className="movies-list" style={{ display: "flex", gap: "20px" }}>
        {filteredMovies.map((m) => (
          <div
            className="movie"
            key={m.title}
            style={{ border: "1px solid red", padding: "10px" }}
          >
            <h3>Name : {m.title}</h3>
            <h4>Year : {m.year}</h4>
            <h4>Ratings : {m.rating}</h4>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Movies;
