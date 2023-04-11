/** @format */

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
