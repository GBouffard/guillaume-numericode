import React, { Component } from "react";
import "./App.css";
import decode from "./services/numericode-logic";
import InputSection from "./components/molecules/input-section";
import OutputSection from "./components/atoms/output-section";

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

        <OutputSection decodedMessage={decode("8 5 12 12 15")} />
      </div>
    );
  }
}

export default App;
