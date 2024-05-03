import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="profile image" />
      <h1>
        <span>I'm Rohit Nautiyal,</span> frontend developer based in India.
      </h1>
      <p>
        Motivated MERN Stack Developer with a Master's degree in Computer
        Applications and 1 year work experience at Publicis Sapient.
      </p>
      <div className="hero-action">
        <div className="hero-connect"> Connect with me </div>
        <div className="hero-resume"> My resume </div>
      </div>
    </div>
  );
};

export default Hero;
