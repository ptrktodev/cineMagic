import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Componentes/Login/Login";
import HomeMovie from "./Componentes/Movies/Home-movie";
import HomeSerie from "./Componentes/Series/Home-serie";
import Footer from "./Footer";
import NotFound from "./NotFound";
import SearchPage from "./Componentes/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="movies/*" element={<HomeMovie />} />
            <Route path="series/*" element={<HomeSerie />} />
            <Route path="sobre/*" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
