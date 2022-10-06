import React from 'react'
import {Link} from 'react-router-dom'


function NavBar() {
    function handleClick(){

    }

  return (
    <nav>
      <button>
        <a onClick={handleClick} href="/">
          Home
        </a>
      </button>
      <button>
        <a onClick={handleClick} href="/">
          Movies
        </a>
      </button>
      <button>
        <a onClick={handleClick} href="/">
          Series
        </a>
      </button>
      <button>
        <a onClick={handleClick} href="/">
          Documentaries
        </a>
      </button>
      <button>
        <a onClick={handleClick} href="/">
          WatchList
        </a>
      </button>
      <div></div>
    </nav>
  );
}

export default NavBar