import React from "react";

function MostPopularList({popularMovies}) {
  return (
    <div>
      <div>
        <h3>Most Popular List</h3>
        <h3>More</h3>
      </div>
      <div>
        <div>
          {popularMovies.map((movie) => (
            <img src={movie.i.Url} alt="pic" key={movie.id} />
          ))}
        </div>
        <div>
          {popularMovies.map((movie) => (
            <img src={movie.i.Url} alt="pic" key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostPopularList;
