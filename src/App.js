import React, { Component } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import SearchResult from "./SearchResult";
import './App.css';

class App extends Component {

    state = {
    showResult: false, 
    currentValue: ""
  }

  handleSubmit = event => {    
    event.preventDefault();
    this.setState({
      showResult: true
    })
  }

  handleChange = event => {
    this.setState({
      currentValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.showResult ? 
          <SearchResult /> 
          : 
          <Home handleSubmit={this.handleSubmit} handleChange={this.handleChange} currentValue={this.state.currentValue}/>
        }
      </div>
    );
  }
}

export default App;
