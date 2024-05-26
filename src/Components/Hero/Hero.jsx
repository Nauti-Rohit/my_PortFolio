import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile image" />
      <h1>
        <span>I'm Rohit Nautiyal,</span> frontend developer based in India.
      </h1>
      <p>
        Motivated MERN Stack Developer with a Master's degree in Computer
        Applications and 2 year of work experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>{" "}
        </div>
        <div className="hero-resume"> <a href="https://drive.google.com/file/d/1epD8O-gRJOH0qT_NEA3eh1I7v8onQ9q8/view?usp=drive_link" target="_blank"> My Resume </a></div>
      </div>
    </div>
  );
};

export default Hero;
