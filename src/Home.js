import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <div>
        <img style={{zIndex: "-10", position: "absolute"}} width="100%" src="assets/background.jpg"/>
        <form onSubmit={this.props.handleSubmit} style={{textAlign: "center"}}>
          <input value={this.props.currentValue} placeholder="Enter the city or zip code your next job is going to be" onChange={this.props.handleChange}/>
          <button>SEARCH</button>
        </form>
      </div>
      );
  }
}

export default Home;