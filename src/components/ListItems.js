import React from "react";
import FilmCard from "./FilmCard";

function ListItems({ films }) {
  const listItems = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2em",
  };

  return (
    <div style={listItems}>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default ListItems;
