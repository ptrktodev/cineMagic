import React from "react";
import { Link } from "react-router-dom";

import Input from "./Input";
import Validacao from "./ValidarInput";
import "./LoginForm.css";
import Button from "../Fixed/Button";
import TitleHead from "../../TitleHead";

const LoginForm = () => {
  const username = Validacao();
  const password = Validacao();

  function goClick(event) {
    event.preventDefault();
  }

  return (
    <form className="container padding" onSubmit={goClick}>
      <TitleHead title="Login" />
      <div className="LoginInput">
        <Input label="Your User" type="text" {...username} />
        <Input label="Your Pass" type="password" {...password} />
        <div className="LoginLink">
          <Link to="">
            <p>
              Forgot <b>password?</b>
            </p>
          </Link>
          <Link to="">
            <p>
              or try <b>Register.</b>
            </p>
          </Link>
        </div>
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
