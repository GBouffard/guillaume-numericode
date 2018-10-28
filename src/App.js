import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          alt="Guillaume's Numericode logo"
          className="App__logo"
          src="/images/logo.png"
        />

        <div className="App__input">PlaceHolder for the input</div>

        <div className="App__output">PlaceHolder for the output</div>
      </div>
    );
  }
}

export default App;
