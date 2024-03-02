import React from "react";

import backImage from "../assets/image/home.jpg";

const Hero = ({ children, img, disableOverlay }) => {
  const image = img ? img : backImage;
  return (
    <div
      className="hero-img-container"
      style={{
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${!disableOverlay ? "hero-overlay" : ""}`}></div>
    </div>
  );
};

export default Hero;
