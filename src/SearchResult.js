import React, { Component } from "react";
import MapResult from "./MapResult";
import Results from "./Results";
import JobView from "./JobView";

class SearchResult extends Component {
  state = {
    isJobView: false
  }

  handleClick = (idx, event) => {
    this.setState({
      isJobView: true,
      jobIdx: idx
    })
  }

  render() {
    return (
      <div className="search-result">
        <MapResult />
        { this.state.isJobView ? <JobView jobIdx={this.state.jobIdx}/> : <Results handleClick={this.handleClick}/>}
      </div>
      );
  }
}

export default SearchResult;