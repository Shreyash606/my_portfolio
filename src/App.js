// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/header";
import About from "./components/About";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Exp from "./components/exp";
import Skills from "./components/skills";
import MyMap from "./components/mymap";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      
      <Projects />
      <Exp/>
      <Skills/>
      <MyMap/>
      <Footer />
    </div>
  );
}

export default App;
