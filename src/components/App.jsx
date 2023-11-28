import React, {useEffect} from "react"
import ParticleBackground from "./ParticleBackground";
import HeaderAnimation from "./HeaderAnimation";
 
function App() {
  useEffect(() => {
    // Elements have loaded, hide the loading message
    const loadingMessage = document.getElementById("loading-message");
    loadingMessage.classList.add("hidden");
  }, []);

  return (
    <div className="App">
      <div id="loading-message" className="hidden">Loading...</div>
      <ParticleBackground />
      <div className="over-background">
        <div className="header-container">
          <div className="left-trapezoid"></div>
          <div className="nav-bar">
            <a href="/">ABOUT</a>
            <a href="/">PORTFOLIO</a>
            <a href="/">WORK WITH ME</a>
          </div>
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