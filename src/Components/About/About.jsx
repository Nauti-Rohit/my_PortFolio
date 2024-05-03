import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme pattern " />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced frontend developer with professional expertise
              in the field. Through my career, i have had the privilege of
              collaborating with prestigious organization, contributing to their
              sucess and growth.
            </p>
            <p>
              My passion for frontend development is not only refelected in my
              extensive experience but also in the enthusiam and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
