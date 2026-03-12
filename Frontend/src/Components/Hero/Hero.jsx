import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/men.png";

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-left">

        <h2>Smart Deals, Better Price!</h2>

        <div className="hero-hand">
          <h1>New</h1>
          <img src={hand_icon} alt="" />
        </div>

        <h1>Collections</h1>
        <h1>For Everyone</h1>

        <div className="hero-latest-btn">
          <span>Latest Collections</span>
          <img src={arrow_icon} alt="" height="55px"/>
        </div>

      </div>

      <div className="hero-right">
        <img src={men} alt="fashion model" />
      </div>

    </div>
  );
};

export default Hero;
