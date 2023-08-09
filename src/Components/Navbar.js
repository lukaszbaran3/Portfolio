import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="menu-list">
        <li>
          <p>Portfolio</p>
        </li>
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
          <Link
            to="https://drive.google.com/file/d/1lw8bcqKbDrlcRGtqudkTIdvt6LXy06dX/view?usp=sharing"
            target="_blank"
          >
            CV
          </Link>
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
