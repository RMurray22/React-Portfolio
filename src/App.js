
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function App() {
  return (
    <main className="text-black-400 bg-gray-400 body-font">
    
      <Navbar />
      <About />
      <Projects />
      <Skills />
      
      <Contact />
    </main>
  );
}