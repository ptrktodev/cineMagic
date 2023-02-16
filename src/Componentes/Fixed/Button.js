import React from "react";
import "./Btn.css";

const Button = ({ children }) => {
  return <button class="btn"> {children}</button>;
};

export default Button;
