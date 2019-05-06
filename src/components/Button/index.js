import React from "react";
import PropTypes from "prop-types";

const Button = ({
  className,
  type,
  children,
  style,
  onClick,
  isLoading,
  loadingText
}) => (
  <button
    className={className}
    type={type}
    style={style}
    onClick={!isLoading ? onClick : () => {}}
  >
    {loadingText || children}
  </button>
);

Button.propType = {
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string
};

export default Button;
