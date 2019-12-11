import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backendVersion: ""
    };
  }

  componentDidMount() {
    fetch("/api/version")
      .then(res => res.json())
      .then(json => json.version)
      .then(version => this.setState({ backendVersion: version })).catch( err => this.setState({backendVersion: "backend call failed"}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Intereseted in React. Learn React
          </a>
          <p>Backend version: {this.state.backendVersion}</p>
        </header>
      </div>
    );
  }
}

export default App;
