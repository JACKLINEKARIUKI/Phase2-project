import React from "react";
import { Link } from "react-router-dom";

function NavBar() {


  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/movies">Movies</Link>
      </button>
      <button>
        <Link to="/series">Series</Link>
      </button>
      <button>
        <Link to="/documentaries">Documentaries</Link>
      </button>
      <button>
        <Link to="/watchlist">WatchList</Link>
      </button>
      <div></div>
    </nav>
  );
}

export default NavBar;
