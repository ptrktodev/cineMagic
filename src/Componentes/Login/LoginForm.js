import React from "react";
import { Link } from "react-router-dom";

import Input from "./Input";
import Validacao from "./ValidarInput";
import "./LoginForm.css";
import Button from "../Fixed/Button";

const LoginForm = () => {
  const username = Validacao();
  const password = Validacao();

  function goClick(event) {
    event.preventDefault();
  }

  return (
    <form className="container" onSubmit={goClick}>
      <div className="LoginInput">
        <Input label="Your User" type="text" {...username} />
        <Input label="Your Pass" type="password" {...password} />
        <Link to="">
          <p>
            Forgot <b>password?</b>
          </p>
        </Link>
        <Button>Login</Button>
        <Link to="">
          <p>
            or try <b>Register.</b>
          </p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
