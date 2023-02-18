import React from "react";
import "./Button.css";

const Button = ({ children }) => {
  return <button className="buttonPrincipal">{children}</button>;
};

export default Button;
