import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/process" element={<Process />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
