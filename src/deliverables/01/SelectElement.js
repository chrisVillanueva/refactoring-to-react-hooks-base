import React from "react";
import PropTypes from "prop-types";

const SelectElement = ({value, handleChange, options}) => {
  return (
    <React.Fragment>
      <select value={value} onChange={ handleChange }>
      {options.map(
        o => <option key={o.key} value={o.label.toLowerCase()}>{o.label}</option>
      )}
      </select>
    </React.Fragment>
  );
};

SelectElement.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};


export default SelectElement;
