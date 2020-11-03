import React from "react";
import PropTypes from "prop-types";

const SelectElement = () => {
  return (
    <React.Fragment>
      <select value={'1'} onChange={ ()=>{} }>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
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
