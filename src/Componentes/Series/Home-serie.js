import React from "react";
import { Route, Routes } from "react-router-dom";
import Serie from "./Serie";
import PosterSerie from "./PosterSeries";

const Login = () => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<Serie />} />
          <Route path="poster/:id" element={<PosterSerie />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
