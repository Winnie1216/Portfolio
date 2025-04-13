import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Clients from "./section/Clients";
import Contact from "./section/Contact";
import { Footer } from "./section/Footer";
import Experience from "./section/Experience";

const App = () => {
  return (
    <div className="max-w-7xl  <Experience/>">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Experience/>
      <Contact/>
      <Footer/>
     
    </div>
  );
};

export default App;
