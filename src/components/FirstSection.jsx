import React from 'react';
import HeaderAnimation from "./HeaderAnimation";
import ScrollDown from "./ScrollDown.jsx";
import ParticleBackground from "./ParticleBackground";

const FirstSection = () => {
  return (
    <div>
    <ParticleBackground />
    <div className="over-background">
        <h1 className="website-name">nikitav.dev</h1>
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
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ScrollDown />
        </div>
        <img src="images/nikita.png" alt="portrait"/>
    </div>
    </div>
  )
}

export default FirstSection;