import React from "react";
import "../Styles/About.css";
import reactImg from "../Images/react.svg";
import javascriptImg from "../Images/javascript.svg";
import htmlImg from "../Images/html.svg";
import cssImg from "../Images/css.svg";
import sassImg from "../Images/sass.svg";
import bootstrapImg from "../Images/bootstrap.svg";
import gitImg from "../Images/git.svg";

function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutDescription">
          <h2>About Me</h2>
          <p>
            I am an aspiring Front End developer from Poland. I create websites
            with an emphasis on providing a pleasant experience to everyone
            using it. I completed over half a year of bootcamp, where I learned
            HTML, CSS, Sass, Javascript and React from scratch. After completing
            the course, I continue learning on my own, looking for new
            challenges.
          </p>
          <div className="skillBoxes slider">
            <div className="skillBox">
              <img className="react skill" src={reactImg} alt="react"></img>
              <p>React</p>
            </div>
            <div className="skillBox">
              <img
                className="javascript skill"
                src={javascriptImg}
                alt="javascript"
              ></img>
              <p>Javascript</p>
            </div>
            <div className="skillBox">
              <img className="html skill" src={htmlImg} alt="html"></img>
              <p>HTML</p>
            </div>
            <div className="skillBox">
              <img className="css skill" src={cssImg} alt="css"></img>
              <p>CSS</p>
            </div>
            <div className="skillBox">
              <img className="sass skill" src={sassImg} alt="sass"></img>
              <p>Sass</p>
            </div>
            <div className="skillBox">
              <img
                className="bootstrap skill"
                src={bootstrapImg}
                alt="bootstrap"
              ></img>
              <p>Bootstrap</p>
            </div>
            <div className="skillBox">
              <img className="git skill" src={gitImg} alt="git"></img>
              <p>Git</p>
            </div>
            <div className="skillBox">
              <img className="react skill" src={reactImg} alt="react"></img>
              <p>React</p>
            </div>
            <div className="skillBox">
              <img
                className="javascript skill"
                src={javascriptImg}
                alt="javascript"
              ></img>
              <p>Javascript</p>
            </div>
            <div className="skillBox">
              <img className="html skill" src={htmlImg} alt="html"></img>
              <p>HTML</p>
            </div>
            <div className="skillBox">
              <img className="css skill" src={cssImg} alt="css"></img>
              <p>CSS</p>
            </div>
            <div className="skillBox">
              <img className="sass skill" src={sassImg} alt="sass"></img>
              <p>Sass</p>
            </div>
            <div className="skillBox">
              <img
                className="bootstrap skill"
                src={bootstrapImg}
                alt="bootstrap"
              ></img>
              <p>Bootstrap</p>
            </div>
            <div className="skillBox">
              <img className="git skill" src={gitImg} alt="git"></img>
              <p>Git</p>
            </div>
          </div>
        </div>
        <div className="aboutImg"></div>
      </div>
    </div>
  );
}

export default About;
