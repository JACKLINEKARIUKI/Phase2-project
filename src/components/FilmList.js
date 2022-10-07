import React from "react";
import FilmCard from "./FilmCard";

function FilmList({ films, listStyle }) {
  // const listItems = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(3, 1fr)",
  //   gridGap: "2em",
  // };

  return (
    <div style={listStyle}>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmList;
