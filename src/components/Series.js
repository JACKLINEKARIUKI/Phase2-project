import React, { useState } from "react";
import FilmList from "./FilmList";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

function Series({ series }) {
  const seriesListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "1.9em",
  };

  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <GenreSearch />
      <div>
        <div>
          <FilmList films={series} listStyle={seriesListStyle}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Series;
