import React from "react";
import Header from "./Header";
import FilmList from "./FilmList";

import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

const documentariesListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1.9em",
};

function Documentaries({ documentaries }) {
  return (
    <div>
      <Header />
      <GenreSearch />
      <div>
        <div>
          <FilmList films={documentaries} listStyle={documentariesListStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Documentaries;
