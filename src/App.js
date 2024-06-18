import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";

import "./App.css";
import useScrollToTop from "./hooks/UseScrollToTop";

function App() {
  useScrollToTop();

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/process" element={<Process />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
