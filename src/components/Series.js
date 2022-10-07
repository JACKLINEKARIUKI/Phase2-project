import React, { useState } from "react";
import SeriesList from "./SeriesList";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

function Series({ series }) {
  console.log(series)
  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <GenreSearch />
      <div>
        <div>
          <SeriesList series={series} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Series;
