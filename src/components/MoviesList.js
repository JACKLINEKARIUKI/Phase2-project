import React, {useState} from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movieItems }) {
  const listItems = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2em",
  };


  // const filterMovies = (e) => {
  //   const filteredMovies = films.filter((film) => {
  //     return film.qid === e.target.value;
  //   });
  //   setMovies(filteredMovies);
  // };

  return (
    <div style={listItems}>
      {movieItems.map((movie) => (
        <MovieCard key={movie.id} film={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
