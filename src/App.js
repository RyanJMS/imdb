import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [plots, setPlots] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchData = (searchString) => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchString}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    setSearch(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <>
      <Header movies={movies} onTextChange={onTextChange} />
      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
      <MovieList
        plots={plots}
        movies={movies}
        setSelectedMovie={setSelectedMovie}
      />
    </>
  );
};

export default App;
