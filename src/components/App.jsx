import React from "react"
import ParticleBackground from "./ParticleBackground";
import HeaderAnimation from "./HeaderAnimation";
 
function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="over-background">
        <div className="header-container">
          <div className="left-trapezoid"></div>
          <div className="nav-bar"></div>
          <div className="nav-bar-underline"></div>
          <div className="right-trapezoid"></div>
        </div>
        <div className="text-over-bg">
          <h1>Hi, I'm <span>Nikita Van</span></h1>
          <HeaderAnimation />
        </div>
        <img src="images/nikita.png" alt="portrait"/>
      </div>
  </div>
  );
} 
 
export default App;