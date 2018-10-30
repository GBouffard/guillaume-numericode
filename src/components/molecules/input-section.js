import React from "react";
import PropTypes from "prop-types";

const submitWithPreventDefault = (e, onSubmit) => {
  e.preventDefault();
  onSubmit();
};

const InputSection = ({ onSubmit, onChange, lastInput }) => (
  <div>
    <form
      className="App__input-section"
      onSubmit={e => {
        submitWithPreventDefault(e, onSubmit);
      }}
    >
      <input
        type="text"
        value={lastInput}
        onChange={onChange}
        className="App__input-section-text"
      />

      <input
        type="submit"
        value="DECODE"
        className="App__input-section-button"
      />
    </form>
  </div>
);

export default InputSection;

InputSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  lastInput: PropTypes.string
};
