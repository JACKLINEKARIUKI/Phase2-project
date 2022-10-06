import React from 'react'

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
    </nav>
  );
}

export default NavBar