import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <div>
        <img style={{zIndex: "-10", position: "absolute"}} width="100%" src="assets/typewriter.jpg"/>
        <form onSubmit={this.props.handleSubmit} style={{margin: "auto"}}>
          <input value={this.props.currentValue} placeholder="Enter your zipcode" onChange={this.props.handleChange}/>
          <button>SEARCH!</button>
        </form>
      </div>
      );
  }
}

export default Home;