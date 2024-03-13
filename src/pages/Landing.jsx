import React from "react";
import Nav from "../assets/components/Nav/Nav";
import "./Landing.css";
import airbeanWelcomeIcon from "./airbean-welcome.png"; // Importera bilden

const Landing = () => {
  return (
    <>
      <Nav />
      <div className="landing-container">
        <div className="landing-overlay"></div>
        {/* Overlay för den gröna bakgrundsfärgen */}
        <div className="landing-text"></div>
        <img src={airbeanWelcomeIcon} alt="Airbean Welcome Icon" />
      </div>
    </>
  );
};

export default Landing;
