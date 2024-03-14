import React from "react";
import Nav from "../assets/components/Nav/Nav";
import Header from "../assets/components/Nav/header/Header";
import "./About.css";
import founderAvatar from "./founder-avatar.png";
import { useState } from "react";
import FooterBackground from "./footer-background.png";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {" "}
      <Header setIsMenuOpen={setIsMenuOpen} />
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <img
            src={founderAvatar}
            alt="Founder Avatar"
            className="founder-avatar"
          />
        </div>
        <h1>Eva Cortado</h1>
        <p>VD och grundare</p>
        <img src={FooterBackground} alt="" />
      </div>
    </>
  );
};

export default About;
