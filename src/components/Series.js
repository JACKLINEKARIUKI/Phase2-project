import React, { useState } from "react";
import Header from "./Header";
import FilmList from "./FilmList";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

const seriesListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1.9em",
};

function Series({ series }) {
    const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Header films={series} setSearchResults={setSearchResults} />
      <GenreSearch />
      <div>
        <div>
          <FilmList films={series} listStyle={seriesListStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Series;
