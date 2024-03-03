import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationHome from "../assets/animation/animationHome.json";

const HomeScreen = () => {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color"> Salve a tutti</h2>
            <h4>Mi chiamo Flavio Amoruso e sono un web developer junior</h4>
          </div>
          <p>Questo è il mio sito web personale dove mostro le mie skills</p>
          <Link to="/projects" className="btn btn-primary">
            Scopri di più
          </Link>
        </div>
        <div className="home-hero-img">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              reverse: true,
              animationHome: animationHome,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
