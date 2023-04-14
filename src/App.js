import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="text-center text-[5rem]">React Routes</h1>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
