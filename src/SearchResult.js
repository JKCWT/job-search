import React from "react";
import MapResult from "./MapResult";
import Results from "./Results";

const SearchResult = (props) => {
  const {
    searchQuery
  } = props;
  return (
    <div className="search-result">
      <MapResult />
      <Results />
    </div>
    );
}

export default SearchResult;