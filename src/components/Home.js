import React from "react";
import Reviews from "./Reviews";
import FilmList from "./FilmList";
import Header from "./Header";
import Footer from "./Footer";

const homePageColumns = {
  display: "flex",
  justifyContent: "space-between",
};

const filmListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "2em",
};

function Home({ films }) {
  return (
    <div>
      <Header />
      <div style={homePageColumns}>
        <div>
          <FilmList films={films} listStyle={filmListStyle} />
        </div>
      
      </div>
      <Footer />
    </div>
  );
}

export default Home;
