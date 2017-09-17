import React, { Component } from "react";
import data from './positions';

console.log(data);
class Results extends Component {

  // componentWillMount() {
  //   fetch("../demo-data/positions.json")
  //   .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //     });
  // }

  render() {
    return (
      <ul className="results">Display Results here</ul>
      );
  }
}

export default Results;