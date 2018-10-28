import React from "react";
import PropTypes from "prop-types";

const OutputSection = ({ decodedMessage }) => {
  return <div className="App__output-section">{decodedMessage}</div>;
};

OutputSection.propTypes = {
  decodedMessage: PropTypes.string.isRequired
};

export default OutputSection;
