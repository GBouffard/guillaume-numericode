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

  componentWillMount() {
    const storedInput = window.sessionStorage.getItem("numericodeInput");
    if (!!storedInput) {
      this.setState({ input: storedInput });
    }
  }

  saveLastInput(event) {
    this.setState({ input: event.target.value });
    window.sessionStorage.setItem("numericodeInput", event.target.value);
  }

  submitForm(e) {
    this.setState({ output: decode(this.state.input) });
  }

  render() {
    const displayedInput = this.state.input || "";

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
          lastInput={displayedInput}
        />

        <OutputSection decodedMessage={this.state.output} />
      </div>
    );
  }
}

export default App;
