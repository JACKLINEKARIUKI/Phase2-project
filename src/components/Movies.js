import React, { useState } from "react";
import Header from "./Header";
import FilmList from "./FilmList";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

const moviesListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1.9em",
};

function Movies({ movies }) {
  const [moviesList, setMoviesList] = useState(movies);
  const [genre, setGenre] = useState("All");
  // const [search, setSearch] = useState("");

  // const filterMovies = (e) => {
  //   const filteredMovies = films.filter((film) => {
  //     return film.qid === e.target.value;
  //   });

  return (
    <div>
      <Header />
      <GenreSearch setGenre={setGenre} />
      <div>
        <div>
          <FilmList films={movies} listStyle={moviesListStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
