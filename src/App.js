import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, [search]);

  const updateSearch = (event) => {
    const data = event.target.value;
    setSearch(data);
  };
  return (
    <>
      <Header movies={movies} updateSearch={updateSearch} />
      <MovieList movies={movies} />
    </>
  );
};

export default App;
