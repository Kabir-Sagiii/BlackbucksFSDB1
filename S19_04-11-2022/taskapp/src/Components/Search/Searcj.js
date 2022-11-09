import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="search">
      <h3>Github Search Component</h3>
      <input size="60" type="text" placeholder="Enter Username" />{" "}
      &nbsp;&nbsp;&nbsp;
      <button>Search</button>
    </div>
  );
}

export default Search;
