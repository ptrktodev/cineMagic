import React from "react";
import "./NotFound.css";
import Button from "./Componentes/Fixed/ButtonHeader";
import { ReactComponent as Flash } from "./Assets/flash.svg";

const NotFound = () => {
  return (
    <div className="container">
      <div className="notFound">
        <Flash />
        <h1>Page not found</h1>
        <p>
          We're sorry, the page you request could not be found. Please go back
          to the homepage.{" "}
        </p>
        <Button>Go Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
