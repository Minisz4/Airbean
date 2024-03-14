import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = (props) => {
  return (
    <nav style={{ display: props.isMenuOpen ? "block" : "none" }}>
      <button onClick={() => props.setIsMenuOpen(false)}>Close</button>
      <ul>
        <li>
          <Link to="/"> Landing </Link>
        </li>
        <li>
          <Link to="/status"> Status</Link>
        </li>
        <li>
          <Link to="/menu"> Menu</Link>
        </li>
        <li>
          <Link to="/cart"> Cart</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
