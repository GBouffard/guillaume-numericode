import React, { Component } from "react";
import "./App.css";
import InputSection from "./components/molecules/input-section";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          alt="Guillaume's Numericode logo"
          className="App__logo"
          src="/images/logo.png"
        />

        <InputSection onSubmit={() => {}} onChange={() => {}} />

        <div className="App__output">PlaceHolder for the output</div>
      </div>
    );
  }
}

export default App;
