import React from "react";

function MovieCard({movie}) {
    return (
      <div>
        <img src={movie.i.Url} alt={movie.l} />
        <div>
          <h3>Title:{movie.l} </h3>
          <p>Category:{movie.qid} </p>
          <p>Genre:{movie.genre} </p>
          <p>Rank on IMDB:{movie.rank} </p>
        </div>
      </div>
    );
    }

export default MovieCard;