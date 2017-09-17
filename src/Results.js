import React, { Component } from "react";
import data from "./demo-data/testdata-austintx";

const Results = props => {
  return (
    <div className="results">     
    {data.hits.map((entry, idx) => {
        return (
          <div onClick={() => props.handleClick(idx)} style={{border: "1px solid #ccc", width: "40%", height: "130px", padding: "10px", margin: "10px", textAlign: "center"}}>
            <h3>{entry._source.company_profile.name}</h3>
            <div>{entry._source.title}</div>
          </div>
          )
      })}
    </div>
    );
}

export default Results;