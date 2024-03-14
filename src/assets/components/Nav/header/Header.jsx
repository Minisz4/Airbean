import React from "react";
import "./Header.css";
import BackgroundHeader from "../../../img/header-background.png";
const Header = (props) => {
  return (
    <>
      <header className="main-header">
        <img src={BackgroundHeader} alt="" />
        <button onClick={() => props.setIsMenuOpen(true)}> Öppna menyn </button>
      </header>
    </>
  );
};

export default Header;
