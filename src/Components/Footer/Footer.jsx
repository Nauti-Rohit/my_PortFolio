import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer logo" />
          <p>
            I'm Rohit Nautiyal, frontend developer based in India. Motivated
            MERN Stack Developer with a Master's degree in Computer Applications
            and 1 year work experience at Publicis Sapient.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="USER ICON" />
            <input type="email" placeholder=" Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Rohit Nautiyal. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p> Term of Services </p>
          <p> Privacy policy </p>
          <p> Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
