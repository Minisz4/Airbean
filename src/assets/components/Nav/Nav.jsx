import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import navIcon from "./nav-icon.png";

const Nav = (props) => {
  return (
    <nav style={{ display: props.isMenuOpen ? "block" : "none" }}>
      <button onClick={() => props.setIsMenuOpen(false)}>Close</button>
      <ul>
        <li>
          <Link onClick={() => props.setIsMenuOpen(false)} to="/status">
            {" "}
            Status
          </Link>
        </li>
        <li>
          <Link onClick={() => props.setIsMenuOpen(false)} to="/menu">
            {" "}
            Menu
          </Link>
        </li>
        <li>
          <Link onClick={() => props.setIsMenuOpen(false)} to="/cart">
            {" "}
            Cart
          </Link>
        </li>
        <li>
          <Link onClick={() => props.setIsMenuOpen(false)} to="/about">
            {" "}
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
