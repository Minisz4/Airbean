import React from "react";
import Nav from "../assets/components/Nav/Nav";
import "./Landing.css";
import airbeanWelcomeIcon from "./airbean-welcome.png";
import { useState } from "react";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="landing-container">
        <div className="landing-overlay"></div>
        <div className="landing-text"></div>
        <img
          onClick={() => setIsMenuOpen(true)}
          src={airbeanWelcomeIcon}
          alt="Airbean Welcome Icon"
        />
      </div>
    </>
  );
};

export default Landing;
