import React from "react"
import ParticleBackground from "./ParticleBackground";
 
function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="over-background">
        <div className="header-container">
          <div className="left-trapezoid"></div>
          <div className="right-trapezoid"></div>
        </div>
        <div className="text-over-bg">
          <h1>Hi, my name is Nikita and I'm a full-stack developer</h1>
          <p>Hi, my name is Nikita and I'm a full-stack developer</p>
          <img className="self-portrait" src="images/nikita.png" alt="portrait"/>
        </div>
      </div>
  </div>
  );
}
 
export default App;