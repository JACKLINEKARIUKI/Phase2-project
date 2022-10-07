import React from "react";
import { useHistory } from "react-router-dom";
// import CardDetails from "./CardDetails";

function FilmCard({ film }) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/cardDetails",
      state: { film },
    });
  };

  const images = {
    width: "16.8vw",
    height: "35vh",
    margin: "0 ",
    padding: "0",
  };

  const details = {
    backgroundColor: "rgba(94, 151, 255, 0.4)",
    width: "16.8vw",
    height: "auto",
  };

  const text = {
    padding: "0em 1em",
  };


  return (
    <div style={details} onClick={handleClick} >
      <img style={images} src={film.i.imageUrl} alt={film.l} />
      <h2 style={text}>{film.l} </h2>
      <p style={text}>Category:{film.qid} </p>
      <p style={text}>Genre:{film.genre} </p>
      <p style={text}>Rank on IMDB:{film.rank} </p>
    </div>
  );
}

export default FilmCard;
      // `/cardDetails?title=${film.l}&description=${film.description}&category=${film.qid}&genre=${film.genre}&poster=${film.i.imageUrl}&year=${film.y}&rating=${film.rank}&cast=${film.s}`
// console.log(film)
  //   const { title, description, poster, year, rating } = film;

  // return (
  //   <div>
  //     <Header />
  //     <div>
  //       <div>
  //         <div>
  //           <div>
  //             <h1>{title}</h1>
  //             <div>
  //               <h3>Category : {category}</h3>
  //               <h3>Genre : {genre}</h3>
  //             </div>
  //             <p>{description}</p>
  //             <p>Release Year : {year}</p>
  //             <p>Rank on IMDB : {rating}</p>
  //             <button>Watch Now</button>
  //             <button>Add to Watch List</button>
  //           </div>
  //           <div>
  //             <div>
  //               <img src={poster} alt={title} />
  //             </div>
  //             <div>
  //               <h3>Key Cast Members</h3>
  //               <p>{cast}</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );