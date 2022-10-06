import React from "react";

function Search() {
  const searchBar = {
    display: "flex",
    justifyContent: "right",
  };

  const input = {
    background: "rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    color: "#D9D9D9",
    margin: "2px",
    padding: "5px",
    marginBottom: "30px",
    fontSize: "15px",
  };

  const options = {
    background: "rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    color: "black",
    fontSize: "15px",
  };

  function handleSearch() {
    console.log("searching");
  }

  return (
    <div style={searchBar}>
      <input
        type="text"
        name="search"
        placeholder="keyword/title"
        style={input}
      />
      <select name="categories" id="categories" style={input}>
        <option value="" style={options}></option>
        <option value="movie" style={options}>
          Movie
        </option>
        <option value="series" style={options}>
          Series
        </option>
        <option value="episode" style={options}>
          Documentary
        </option>
      </select>
      <button onClick={handleSearch} style={input}>
        Search
      </button>
    </div>
  );
}

export default Search;
