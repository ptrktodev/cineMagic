import React from "react";
import { Route, Routes } from "react-router-dom";
import Movie from "./Movie";
import Poster from "./Poster";

const Login = () => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="poster/:id" element={<Poster />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
