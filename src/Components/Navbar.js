import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <button className="cv">
          <Link to="cv">CV</Link>
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
