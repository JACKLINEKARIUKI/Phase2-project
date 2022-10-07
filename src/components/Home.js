import React from "react";
import MostPopularList from "./MostPopularList";
import Reviews from "./Reviews";
import ListItems from "./ListItems";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
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
  // const headers = {
  //   color: "white",
  //   fontSize: "20px",
  //   padding: "0px 5px",
  // }
  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <div style={homePageColumns}>
        <div>
          <ListItems films={films} />
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
