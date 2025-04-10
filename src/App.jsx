import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Clients from "./section/Clients";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
    </div>
  );
};

export default App;
