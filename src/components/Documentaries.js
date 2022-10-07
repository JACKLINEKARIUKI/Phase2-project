import React from "react";
import FilmList from "./FilmList";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

function Documentaries({documentaries}){
    const documentariesListStyle = {
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
          <FilmList films={documentaries} listStyle={documentariesListStyle}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentaries;
