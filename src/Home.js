import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <input/>
        <button>SEARCH!</button>
        </form>
      </div>
      );
  }
}

export default Home;