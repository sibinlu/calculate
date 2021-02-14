import React, { Component } from 'react';
import Page from './Page.js';
import logo from "./logo.svg";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Calculation Hello World</h1>
          </header>

          <Page />
        </div>
    );
  }
}

export default App;
