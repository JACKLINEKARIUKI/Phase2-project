import React, { useState } from "react";
import MoviesList from "./MoviesList";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

function Movies({ films }) {
  const [movies, setMovies] = useState(films);
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");

  // const filterMovies = (e) => {
  //   const filteredMovies = films.filter((film) => {
  //     return film.qid === e.target.value;
  //   });

  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <GenreSearch />
      <div>
        <div>
          <MoviesList movieItems={films} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
