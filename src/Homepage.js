import React from "react";
import "./Styles/Homepage.css";
function Homepage() {
  return (
    <div className="homepage">
      <div className="homepageText">
        <h1>
          Hello <i class="fa-regular fa-hand-wave fa-shake"></i>
        </h1>
        <span>I`m Łukasz Baran</span>
      </div>
      <div className="homepageImg"></div>
    </div>
  );
}

export default Homepage;
