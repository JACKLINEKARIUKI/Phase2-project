import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";

function Header({setSearchTerm }) {
  return (
    <div>
      <Logo />
      <Search setSearchTerm={setSearchTerm} />
      <Navbar />
    </div>
  );
}

export default Header;
