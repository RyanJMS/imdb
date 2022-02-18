import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies?.map((movie) => (
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
