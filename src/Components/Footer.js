import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="cont">Made by Anas Bin Sohail</div>
      <div className="contact">
        <a href="https://github.com/anassohail99">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/anas.b.sohail">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/anas-bin-sohail-3a6168168/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
