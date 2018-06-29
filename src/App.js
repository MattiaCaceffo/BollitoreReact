import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import CalculatorDue from "./CalculatorDue"
import SignUpDialog from "./SignUpDialog"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Questo è lo stimatore di bollitura!
        </p>

          <Calculator/>
          <h1>Calcolatore due</h1>
          //Scale disponibili: f,c,k
          <CalculatorDue/>
          <SignUpDialog />
      </div>
    );
  }
}

export default App;
