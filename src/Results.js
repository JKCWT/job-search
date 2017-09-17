import React, { Component } from "react";
import data from "./demo-data/testdata-austintx";

const Results = props => {
  return (
    <div className="results">
      {data.hits.map((entry, idx) => {
        return (
          <div
            onClick={() => props.handleClick(idx)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "15px",
              width: "40%",
              height: "130px",
              padding: "10px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "1.5em" }}>
              {entry._source.company_profile.name}
            </div>
            <div>{entry._source.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Results;