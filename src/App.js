import React, { Component } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import SearchResult from "./SearchResult";
import './App.css';

class App extends Component {

    state = {
    showResult: false
  }

  handleSubmit = event => {
    this.setState({
      showResult: true
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.showResult ? <SearchResult /> : <Home handleSubmit={this.handleSubmit}/>}
      </div>
    );
  }
}

export default App;
