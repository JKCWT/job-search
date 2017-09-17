import React, { Component } from "react";
import data from "./demo-data/testdata-austintx"

class JobView extends Component {
  state = {
    jobPostView: false
  }

  handleClick = event => {
    this.setState({
      jobPostView: !this.state.jobPostView
    })
  }


  render() {
    const companyFont = { 
      padding: "10px 20px",
      fontWeight: !this.state.jobPostView ? "bold": "normal",
      borderBottom: !this.state.jobPostView ? "1px solid cadetblue": "none"
    };
    const jobFont = {
      padding: "10px",
      fontWeight: this.state.jobPostView ? "bold": "normal",
      borderBottom: this.state.jobPostView ? "1px solid cadetblue": "none"
    }

    return (
      <div style={{padding: "0 20px", width: "50%", height: "530px", overflow: "scroll"}}>
        <span style={companyFont} onClick={this.handleClick}>About the Company</span>
        <span style={jobFont} onClick={this.handleClick}>Job Posting</span>
        { this.state.jobPostView ?
          <div style={{padding: "20px"}}>
              <h2>{data.hits[this.props.jobIdx]._source.company_profile.name}</h2>
              <a target="_blank" href={data.hits[this.props.jobIdx]._source.source}> View posting on company site </a>
              <div dangerouslySetInnerHTML={{ __html: data.hits[this.props.jobIdx]._source.description }}></div>
            </div>
            :
            <div style={{padding: "20px"}}>
            <h2>{data.hits[this.props.jobIdx]._source.company_profile.name}</h2>
            <RouteCommute />
            </div>
          }

      </div>
      );
  }
}

export default JobView;