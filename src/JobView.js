import React, { Component } from "react";
import data from "./demo-data/testdata-austintx";
import RouteCommute from "./RouteCommute";
import SkyLight from "react-skylight";

class JobView extends Component {
  state = {
    jobPostView: true
  };

  handleClick = event => {
    this.setState({
      jobPostView: !this.state.jobPostView
    });
  };

  render() {
    const companyFont = {
      padding: "10px 20px",
      fontWeight: !this.state.jobPostView ? "bold" : "normal",
      borderBottom: !this.state.jobPostView ? "1px solid cadetblue" : "none"
    };
    const jobFont = {
      padding: "10px",
      fontWeight: this.state.jobPostView ? "bold" : "normal",
      borderBottom: this.state.jobPostView ? "1px solid cadetblue" : "none"
    };
    const modal = {
      height: "550px",
      marginTop: "-300px",
      marginLeft: "-35%"
    };

    return (
      <div
        style={{
          padding: "0 20px",
          width: "50%",
          height: "100vh",
          overflow: "scroll"
        }}
      >
        <div style={{display: "flex"}}>
        <img style={{margin: "0 10px 20px 0"}} src={data.hits[this.props.jobIdx]._source.logo} />
        <h2>
        {data.hits[this.props.jobIdx]._source.company_profile.name}</h2>
        </div>
        <span style={jobFont} onClick={this.handleClick}>
          Job Posting
        </span>
        <span style={companyFont} onClick={this.handleClick}>
          About the Company
        </span>
        {this.state.jobPostView ? (
          <div style={{ padding: "20px" }}>
            <button style={{marginTop: "20px"}} onClick={() => this.refs.simpleDialog.show()}>
              Apply for Job Post
            </button>
            <div
              dangerouslySetInnerHTML={{
                __html: data.hits[this.props.jobIdx]._source.description
              }}
            />
            <a
              target="_blank"
              href={data.hits[this.props.jobIdx]._source.source}
            >
              {" "}
              View posting on company site{" "}
            </a>
            <SkyLight
              dialogStyles={modal}
              hideOnOverlayClicked
              ref="simpleDialog"
            >
              <iframe
                style={{ width: "100%", height: "95%", overflow: "scroll" }}
                frameBorder="0"
                src={
                  "http://localhost:3000/index.html?username=Y2luZHkwMDc&curNode=job-center"
                }
              />
            </SkyLight>
          </div>
        ) : (
          <div style={{ padding: "20px" }}>
            <div
              style={{
                color: "cadetblue",
                padding: "3px",
                fontSize: "1.2em",
                fontWeight: "bold",
                marginTop: "20px"
              }}
            >
              Route your Commute
            </div>
            <RouteCommute
              currentValue={this.state.currentValue}
              handleSubmit={this.props.handleSubmit}
              handleChange={this.props.handleChange}
            />
            <div>
              <div
                style={{
                  color: "cadetblue",
                  padding: "3px",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  marginTop: "20px"
                }}
              >
                See Near By
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  color: "inherit",
                  fontWeight: "normal"
                }}
              >
                <span
                  style={{
                    width: "40%",
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    color: "cadetblue",
                    fontSize: "1.5em",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 15px",
                    margin: "5px"
                  }}
                >
                  <i className="fa fa-support" aria-hidden="true" />
                  Gym
                </span>
                <span
                  style={{
                    width: "40%",
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    color: "cadetblue",
                    fontSize: "1.5em",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 15px",
                    margin: "5px"
                  }}
                >
                  <i className="fa fa-spoon" aria-hidden="true" />
                  Groceries Store
                </span>
                <span
                  style={{
                    width: "40%",
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    color: "cadetblue",
                    fontSize: "1.5em",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 15px",
                    margin: "5px"
                  }}
                >
                  <i className="fa fa-ambulance" aria-hidden="true" />Hospital
                </span>
                <span
                  style={{
                    width: "40%",
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    color: "cadetblue",
                    fontSize: "1.5em",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 15px",
                    margin: "5px"
                  }}
                >
                  <i className="fa fa-tags" aria-hidden="true" />Shopping
                </span>
              </div>
            </div>
            <div>
              <div
                style={{
                  color: "cadetblue",
                  padding: "3px",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  marginTop: "20px"
                }}
              >
                Company Rating
              </div>
              <div style={{ textAlign: "center" }}>
                <i
                  style={{ color: "cadetblue", fontSize: "3em" }}
                  className="fa fa-star"
                  aria-hidden="true"
                />
                <i
                  style={{ color: "cadetblue", fontSize: "3em" }}
                  className="fa fa-star"
                  aria-hidden="true"
                />
                <i
                  style={{ color: "cadetblue", fontSize: "3em" }}
                  className="fa fa-star"
                  aria-hidden="true"
                />
                <i
                  style={{ color: "cadetblue", fontSize: "3em" }}
                  className="fa fa-star-half-o"
                  aria-hidden="true"
                />
                <i
                  style={{ color: "cadetblue", fontSize: "3em" }}
                  className="fa fa-star-o"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  color: "cadetblue",
                  padding: "3px",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  marginTop: "30px"
                }}
              >
                Most Recently Reviews
              </div>
              <div>
                <h4>"ups and downs, still works for me"</h4>
                <p>
                  Current Employee - Staff Site Reliability Engineer in San
                  Francisco, CA
                </p>
                <p>
                  Recommends Neutral Outlook Approves of CEO I have been working
                  at Twitter full-time (More than 5 years){" "}
                </p>
                <p>
                  Pros -comp isn't top of market anymore but the comp to >40
                  hour week ratio is amazing for the bay area -good performers
                  can work on almost anything they want
                </p>
                <p>
                  Cons -most teams have open headcount and it means things are
                  often under-staffed Advice to Management So many predictions
                  of Twitter's demise have come and gone that I don't even
                  notice them anymore. Just keep it an ok place to work and I
                  have no reason to leave.
                </p>
              </div>
              <hr />
              <div>
                <h4>"ups and downs, still works for me"</h4>
                <p>
                  Current Employee - Staff Site Reliability Engineer in San
                  Francisco, CA
                </p>
                <p>
                  Recommends Neutral Outlook Approves of CEO I have been working
                  at Twitter full-time (More than 5 years){" "}
                </p>
                <p>
                  Pros -comp isn't top of market anymore but the comp to >40
                  hour week ratio is amazing for the bay area -good performers
                  can work on almost anything they want
                </p>
                <p>
                  Cons -most teams have open headcount and it means things are
                  often under-staffed Advice to Management So many predictions
                  of Twitter's demise have come and gone that I don't even
                  notice them anymore. Just keep it an ok place to work and I
                  have no reason to leave.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default JobView;