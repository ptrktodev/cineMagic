import React from "react";
import { Route, Routes } from "react-router-dom";
import Serie from "./Serie";

const Login = () => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<Serie />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
