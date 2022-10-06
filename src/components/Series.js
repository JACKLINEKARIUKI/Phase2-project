import React from "react";
import ListItems from "./ListItems";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

function Series(){
  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <GenreSearch />
      <ListItems />
      <Footer />
    </div>
  );
};

export default Series;
