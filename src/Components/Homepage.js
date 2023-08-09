import React from "react";
import "../Styles/Homepage.css";
import Typewriter from "typewriter-effect";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepageText">
        <h1>
          Hello {"  "}
          <span className="wave">👋</span>
        </h1>
        <span>I`m Łukasz Baran</span>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("React JS Developer")
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString("Front-End Developer!")
              .pauseFor(2000);
          }}
        />
        <a
          className="github"
          href="https://github.com/lukaszbaran3"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <img
        src={require("../Images/my-photo.png")}
        className="homepageImg"
        alt="Lukasz Baran"
      />
    </div>
  );
}

export default Homepage;
