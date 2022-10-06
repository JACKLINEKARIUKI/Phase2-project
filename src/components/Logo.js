import React from "react";

function Logo() {
  return (
    <div>
      <h1>WatchTower</h1>
      <div>
        <button>
          <a href="/login">Login</a>
        </button>
        <button>
          <a href="/signup">Sign Up</a>
        </button>
      </div>
    </div>
  );
}

export default Logo;