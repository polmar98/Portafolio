//import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="bg-gradient-to-r from-cyan-900 via-green-700 to-amber-300">
        <Navbar/>
        <About />
        <Projects />
        <Skills />
        <Testimonials />c
        <Contact />
    </main>
  );
}

export default App;
