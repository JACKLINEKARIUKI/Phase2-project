import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "19%",
    borderRadius: "5px",
    border: "1px solid white",
    color: "white",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: "bold",
    alignContent: "left",
    cursor: "pointer", 
    active: {
      backgroundColor: "rgba(94, 151, 255, 0.4)",
    },
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
          <NavLink to="/">Home</NavLink>
        </button>
        <button style={navLinks}>
          <NavLink to="/movies">Movies</NavLink>
        </button>
        <button style={navLinks}>
          <NavLink to="/series">Series</NavLink>
        </button>
        <button style={navLinks}>
          <NavLink to="/documentaries">Documentaries</NavLink>
        </button>
        <button style={navLinks}>
          <NavLink to="/watchlist">WatchList</NavLink>
        </button>
      </nav>
      <div style={space}></div>
    </div>
  );
}

export default Navbar;
