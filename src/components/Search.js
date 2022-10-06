import React from "react";

function Search() {
 const searchBar = {
    display: "flex",
    justifyContent: "right",
 }


 function handleSearch(){
    console.log("searching");
 }

  return (
    <div style={searchBar}>
      <input type="text" name="search" placeholder="keyword/title" />
      <select name="" id="">
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Documentary</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
