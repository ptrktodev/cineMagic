import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Componentes/Login/Login";
import HomeMovie from "./Componentes/Movies/Home-movie";
import HomeSerie from "./Componentes/Series/Home-serie";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies/*" element={<HomeMovie />} />
            <Route path="series/*" element={<HomeSerie />} />
            <Route path="login/*" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
