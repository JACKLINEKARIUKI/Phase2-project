import React from "react";

function FilmCard({ film }) {
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
      <img style={images} src={film.i.imageUrl} alt={film.l} />
      <h2 style={text}>{film.l} </h2>
      <p style={text}>Category:{film.qid} </p>
      <p style={text}>Genre:{film.genre} </p>
      <p style={text}>Rank on IMDB:{film.rank} </p>
    </div>
  );
}

export default FilmCard;
