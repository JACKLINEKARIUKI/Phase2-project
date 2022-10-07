import React from "react";
import CardDetails from "./CardDetails";

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

  function handleClick(){
    return(
      <CardDetails film={film} />
    )
  }

  return (
    <div style={details} onClick={handleClick}>
      <img style={images} src={film.i.imageUrl} alt={film.l} />
      <h2 style={text}>{film.l} </h2>
      <p style={text}>Category:{film.qid} </p>
      <p style={text}>Genre:{film.genre} </p>
      <p style={text}>Rank on IMDB:{film.rank} </p>
    </div>
  );
}

export default FilmCard;
