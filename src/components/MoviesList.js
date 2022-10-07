import React, {useState} from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
  const listItems = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "1.8em",
  };


  return (
    <div style={listItems}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
