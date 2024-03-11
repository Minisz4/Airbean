import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
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
      </ul>
    </nav>
  );
};

export default Nav;
