import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=6fe4deda&s=${search}`)
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
    <div className="">
      <div className="">
        <Header movies={movies} updateSearch={updateSearch} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
