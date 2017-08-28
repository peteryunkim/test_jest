import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increase Count </button>
      </div>
    );
  }
}

export default App;
