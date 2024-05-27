import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation";
import Parallax from "./components/parallax";
import Profile from "./components/profile";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Clubs from "./components/clubs";
import React, { useEffect, useRef } from "react";

function App() {
  return (
    <body>
      <Navigation></Navigation>
      <Parallax></Parallax>
      <Profile></Profile>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Clubs></Clubs>
      <Contact></Contact>
    </body>
  );
}

export default App;
