import React from "react";
import { Link } from "react-router-dom";


const logoStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "30px",
  fontWeight: "bold",
  fontFamily: "Tangerine",
}


const buttonStyle = {
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
  outline: "none",
  padding: "4px 20px",
  margin: "10px",
  borderRadius: "8px",
}

function Logo() {
  return (
    <div style={logoStyle}>
      <h1>WatchTower</h1>
      <div>
        <button style={buttonStyle}>
          <Link to="/login">Login</Link>
        </button>
        <button style={buttonStyle}>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default Logo;