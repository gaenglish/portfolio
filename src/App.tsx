import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import bg from "./assets/grid_0.png";
import { Resume } from "./pages/Resume";
import { NavBar } from "./components/navigation/NavBar";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
