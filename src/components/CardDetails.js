import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function CardDetails({ film }) {
const [toWatch, setToWatch] = useState([]);
const history = useHistory();
  
function handleClick(){
  setToWatch([...toWatch, film])
  history.push("/watchList", {toWatch})
}

// console.log(film)
    // const { title, description, poster, year, rating } = film;

  return (
    <div>
      {/* <Header /> */}
      {/* <div>
        <div>
          <div>
            <div>
              <h1>{film.l}</h1>
              <div>
                <h3>Category : {film.qid}</h3>
                <h3>Genre : {film.genre}</h3>
              </div>
              <p>{film.description}</p>
              <p>Release Year : {film.y}</p>
              <p>Rank on IMDB : {film.rank}</p>
              <button>Watch Now</button>
              <button onClick={handleClick}>Add to Watch List</button>
            </div>
            <div>
              <div>
                <img src={film.i.imageUrl} alt={film.l} />
              </div>
              <div>
                <h3>Key Cast Members</h3>
                <p>{film.s}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CardDetails;
