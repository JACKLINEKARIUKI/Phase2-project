import React from "react";
import MostPopularList from "./MostPopularList";
import Reviews from "./Reviews";
import FilmList from "./FilmList";
import Header from "./Header";
// import Logo from "./Logo";
// import Search from "./Search";
// import Navbar from "./Navbar";
import Footer from "./Footer";

function Home({ films }) {
  const homePageColumns = {
    display: "flex",
    justifyContent: "space-between",
  };
  const homePageRows = {
    display: "block",
    flexDirection: "row",
    alignItems: "center",
  };
  const filmListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2em",
  };
  return (
    <div>
      <Header />
      <div style={homePageColumns}>
        <div>
          <FilmList films={films} listStyle={filmListStyle} />
        </div>
        <div>
          <Reviews style={homePageRows} />
          <MostPopularList style={homePageRows} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
