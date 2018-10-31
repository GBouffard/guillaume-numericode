import React, { Component } from "react";
import "./App.css";
import logic from "./services/numericode-logic";
import InputSection from "./components/molecules/input-section";
import OutputSection from "./components/atoms/output-section";
import ErrorHandler from "./components/atoms/error-handler";

class App extends Component {
  constructor() {
    super();
    this.saveLastInput = this.saveLastInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.clearError = this.clearError.bind(this);
    this.state = {
      input: null,
      output: null,
      hasError: false
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

  clearError() {
    this.setState({ hasError: false });
  }

  submitForm(e) {
    const isValid = logic.isValid(this.state.input);
    this.setState(
      isValid ? { output: logic.decode(this.state.input) } : { hasError: true }
    );
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
          onFocus={this.clearError}
          lastInput={this.state.input || ""}
        />

        <OutputSection decodedMessage={this.state.output} />

        {this.state.hasError && <ErrorHandler />}
      </div>
    );
  }
}

export default App;
