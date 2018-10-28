import React, { Component } from "react";
import "./App.css";
import decode from "./services/numericode-logic";
import InputSection from "./components/molecules/input-section";
import OutputSection from "./components/atoms/output-section";

class App extends Component {
  constructor() {
    super();
    this.saveLastInput = this.saveLastInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      input: null,
      output: null
    };
  }

  saveLastInput(event) {
    this.setState({ input: event.target.value });
  }

  submitForm(e) {
    this.setState({ output: decode(this.state.input) });
  }

  render() {
    return (
      <div className="App">
        <img
          alt="Guillaume's Numericode logo"
          className="App__logo"
          src="/images/logo.png"
        />

        <InputSection
          onSubmit={this.submitForm}
          onChange={this.saveLastInput}
        />

        <OutputSection decodedMessage={this.state.output} />
      </div>
    );
  }
}

export default App;
