import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import navIcon from "./nav-icon.png";

const Nav = (props) => {
  return (
    <nav style={{ display: props.isMenuOpen ? "block" : "none" }}>
      <ul className="ullist">
        <li>
          <button
            className="close-button"
            onClick={() => props.setIsMenuOpen(false)}
          >
            X
          </button>
        </li>
        <li>
          <Link
            onClick={() => props.setIsMenuOpen(false)}
            to="/status"
            style={{ textDecoration: "none", color: "white" }}
          >
            Status
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.setIsMenuOpen(false)}
            to="/menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.setIsMenuOpen(false)}
            to="/cart"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.setIsMenuOpen(false)}
            to="/about"
            style={{ textDecoration: "none", color: "white" }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
