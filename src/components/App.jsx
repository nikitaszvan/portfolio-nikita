import React, {useState, useEffect} from "react"
import ParticleBackground from "./ParticleBackground";
import HeaderAnimation from "./HeaderAnimation";
import {SquareLoader} from 'react-spinners';
 
function App() {
    const [isLoading, setIsLoading] = useState(true);
    
    const handleLoading = () => {
    setIsLoading(false);
    }
    
    useEffect(()=>{
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
    },[])
    
    return  !isLoading ? (
    <div className="App">
    <ParticleBackground />
    <div className="over-background">
      <div className="header-container">
        <div className="left-trapezoid"></div>
        <div className="nav-bar">
          <a href="/">ABOUT ME</a>
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
    )
    :(<div><SquareLoader color="black" /></div>)

  }
    
    

export default App;