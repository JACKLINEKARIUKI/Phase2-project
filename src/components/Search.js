import React from "react";

function Search() {
 function handleSearch(){
    console.log("searching");
 }

  return (
    <div>
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
