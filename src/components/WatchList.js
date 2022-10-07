import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FilmList from "./FilmList";

function WatchList({toWatch}) {

    const watchListStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridGap: "1.9em",
    };

  return (
    <div>
      <Header />
      <FilmList watchList={toWatch} listStyle={watchListStyle}/>
      <Footer />
    </div>
  );
}

export default WatchList;
