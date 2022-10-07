import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "19%",
    padding: "0.4vh 7vw",
    borderRadius: "3px",
    border: "1px solid white",
    color: "white",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
  };

  const navbar = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const space = {
    margin: "8px 0px",
    padding: "12px",
    backgroundColor: "rgba(94, 151, 255, 0.4)",
  };

  return (
    <div>
      <nav style={navbar}>
        <button style={navLinks}>
          <Link to="/">
            Home
          </Link>
        </button>
        <button style={navLinks}>
          <Link  to="/movies">
            Movies
          </Link>
        </button>
        <button style={navLinks}>
          <Link to="/series">
            Series
          </Link>
        </button>
        <button style={navLinks}>
          <Link to="/documentaries">
            Documentaries
          </Link>
        </button>
        <button style={navLinks}>
          <Link to="/watchlist">
            WatchList
          </Link>
        </button>
      </nav>
      <div style={space}></div>
    </div>
  );
}

export default Navbar;
