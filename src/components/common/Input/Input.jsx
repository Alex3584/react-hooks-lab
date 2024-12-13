import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = React.forwardRef(
  ({ value, onChange, placeholder, style }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        className="input"
      />
    );
  }
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

export default Input;
