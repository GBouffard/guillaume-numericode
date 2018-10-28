import React from "react";
import PropTypes from "prop-types";

const submitWithPreventDefault = (e, onSubmit) => {
  e.preventDefault();
  onSubmit();
};

const InputSection = ({ onSubmit, onChange }) => (
  <div className="App__input-section">
    <form
      onSubmit={e => {
        submitWithPreventDefault(e, onSubmit);
      }}
    >
      <input
        type="password"
        onChange={onChange}
        className="App__input-section-password"
      />

      <input
        type="submit"
        value="Decode"
        className="App__input-section-button"
      />
    </form>
  </div>
);

export default InputSection;

InputSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
