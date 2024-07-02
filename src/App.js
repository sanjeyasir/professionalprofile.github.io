// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/homeP";
import Projects from "./pages/projects/projectsP";
import Experience from "./pages/experience/experienceP";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


//  <Router basename="/professionalprofile.github.io">

