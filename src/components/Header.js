import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
    </div>
  );
}

export default Header;
