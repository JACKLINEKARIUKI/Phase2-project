import React from "react";

function GenreSearch() {
  function handleSearch() {
    console.log("searching");
  }

  return (
    <div>
      <select name="" id="" onChange={handleSearch}>
        <option value="action">Movie</option>
        <option value="comedy">Series</option>
        <option value="drama">Documentary</option>
        <option value="fantasy">Series</option>
        <option value="horror">Series</option>
        <option value="thriller">Series</option>
      </select>
    </div>
  );
}

export default GenreSearch;
