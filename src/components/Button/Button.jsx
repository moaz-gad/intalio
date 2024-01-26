// src/components/Button/Button.jsx

import React from "react";
import styles from "./button.module.css"; // Import your button styles

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
