import React from "react";
import ListItems from "./FilmList";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";
import MyListItems from "./MyListItems";

function WatchList(){
  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <MyListItems />
      <Footer />
    </div>
  );
};


export default WatchList