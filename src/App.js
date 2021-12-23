import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Popular from "./components/pages/Popular";
import TopRated from "./components/pages/TopRated";
import Search from "./components/pages/Search";
import HomePage from "./components/homePage/HomePage";
import { MovieState } from "./Context/MovieContext";

function App() {
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
