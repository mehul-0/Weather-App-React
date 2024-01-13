import React from "react";

function SearchEngine({ query, setQuery, search }) {
  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      <button><i className="fas fa-search" style={{ fontSize: "18px" }} onClick={search}></i></button>
    </div>
  );
}

export default SearchEngine;
