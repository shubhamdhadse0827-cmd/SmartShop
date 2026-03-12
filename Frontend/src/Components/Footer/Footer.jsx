import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-top">

        {/* LOGO COLUMN */}
        <div className="footer-logo">
          <img src={logo} alt="" height="40px"/>
          <h2>SmartShop</h2>
          <p>Your one stop fashion destination</p>
        </div>

        {/* LINKS COLUMN */}
        <div className="footer-links">

          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Returns</p>
            <p>Shipping</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <div>
            <h4>Follow Us</h4>

            <div className="social-icons">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 SmartShop. All Rights Reserved.</p>
      </div>

    </div>
  );
};

export default Footer;  