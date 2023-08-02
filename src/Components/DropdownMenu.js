import React, { useState } from "react";
import "../Styles/DropdownMenu.css";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <p className="logo">Portfolio</p>
      <button className="openMenu" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      {showMenu && <SmallNavbar />}
    </div>
  );
}

const SmallNavbar = () => {
  return (
    <div className="dropdownNav">
      <ul className="menuList">
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
};
export default DropdownMenu;
