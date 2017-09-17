import React, { Component } from "react";
import MapResult from "./MapResult";
import Results from "./Results";
import JobView from "./JobView";


class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isJobView: false,
      currentValue: "",
      home: {}
    }
  }

  handleClick = (idx, event) => {
    this.setState({
      isJobView: true,
      jobIdx: idx
    })
  }

  handleChange = event => {
    this.setState({
      currentValue: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // pass home address to update map route
    var homeArr = this.state.currentValue.split(",").map((x) => x.trim());
    var zipSplit = homeArr[2].split(" ").concat(homeArr);
    zipSplit.splice(4,1);
    console.log(zipSplit);
    this.setState({
      home:{
        street: zipSplit[2],
        city: zipSplit[3],
        state: zipSplit[0],
        postalCode: zipSplit[1]
      }
    });
  };

  render() {
    return (
      <div className="search-result">
        <MapResult
          home={this.state.home}/>
        { 
          this.state.isJobView ? 
            <JobView 
              jobIdx={this.state.jobIdx}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}/> : 
            <Results handleClick={this.handleClick}/>
        }
      </div>
      );
  }
}

export default SearchResult;