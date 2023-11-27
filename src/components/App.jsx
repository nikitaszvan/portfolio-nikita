import React from "react"
import ParticleBackground from "./ParticleBackground";
 
function App() {
  const p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="App">
      <ParticleBackground />
      <div className="over-background">
        <div className="header-container">
          <div className="left-trapezoid"></div>
          <div className="nav-bar"></div>
          <div className="right-trapezoid"></div>
        </div>
        <div className="text-over-bg">
          <h1>Hi, my name is Nikita and I'm a <span> full-stack developer </span></h1>
          <p>{p}</p>
        </div>
        <img src="images/nikita.png" alt="portrait"/>
      </div>
  </div>
  );
}
 
export default App;