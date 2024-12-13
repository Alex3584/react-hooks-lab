import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

function Button({ children, onClick, variant = "default", className = "" }) {

const buttonClass = `button button--${variant} ${className}`;

  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["default", "count", "reset"]),
  className: PropTypes.string,
};

export default Button;
