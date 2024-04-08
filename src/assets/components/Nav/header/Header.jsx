import React from "react";
import "./Header.css";
import BackgroundHeader from "../../../img/header-background.png";
import navIcon from "../nav-icon.png";
import cartIcon from "./cart-icon.png";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };
  return (
    <>
      <header className="main-header">
        <img src={BackgroundHeader} alt="" />
        <img
          className="nav-icon"
          src={navIcon}
          onClick={() => props.setIsMenuOpen(true)}
        />
        {props.showCartIcon && (
          <img
            src={cartIcon}
            className="cart-icon"
            onClick={() => redirect("/cart")}
          />
        )}
      </header>
    </>
  );
};

export default Header;
