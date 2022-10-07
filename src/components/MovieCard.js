import React from "react";

function MovieCard({ movie }) {
  const images = {
    width: "16.8vw",
    height: "35vh",
    margin: "0 ",
    padding: "0",
  };

  const details = {
    backgroundColor: "rgba(94, 151, 255, 0.4)",
    width: "16.8vw",
    height: "auto",
  };

  const text = {
    padding: "0em 1em",
  };

  return (
    <div style={details}>
      <img style={images} src={movie.i.imageUrl} alt={movie.l} />
      <h2 style={text}>{movie.l} </h2>
      <p style={text}>Category:{movie.qid} </p>
      <p style={text}>Genre:{movie.genre} </p>
      <p style={text}>Rank on IMDB:{movie.rank} </p>
    </div>
  );
}

export default MovieCard;
