import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Search from "./pages/Search";
import HomePage from "./pages/homePage/HomePage";
import { MovieState } from "./Context/MovieContext";

const App = () => {
  return (
    <MovieState>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/find" element={<Search />} />
        </Routes>
      </div>
    </MovieState>
  );
}

export default App;
