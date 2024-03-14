import React from "react";
import "./Header.css";
import BackgroundHeader from "../../../img/header-background.png";
import navIcon from "../nav-icon.png";
const Header = (props) => {
  return (
    <>
      <header className="main-header">
        <img src={BackgroundHeader} alt="" />
        <img
          className="nav-icon"
          src={navIcon}
          onClick={() => props.setIsMenuOpen(true)}
        />
      </header>
    </>
  );
};

export default Header;
