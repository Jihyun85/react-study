import React from "react";
import PropTypes from "prop-types";

function TodoInput({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={value} />
      <button type="submit">Submit</button>
    </form>
  );
}

TodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
