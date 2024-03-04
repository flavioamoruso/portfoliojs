import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assets/animation/animationHome.json";
import AOS from "aos";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}

const HomeScreen = () => {
  return (
    <>
      <div className="home-hero" data-aos="zoom-in">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color">Salve a tutti</h2>
            <h4>Mi chiamo Flavio Amoruso e sono un web developer junior</h4>
          </div>

          <p>Questo è il mio sito web personale dove mostro le mie skills</p>

          <Link to="/projects" className="btn btn-primary">
            Scopri di più
          </Link>
        </div>
        <div className="home-hero-img focus-in-contract-bck">
          <Lottie
            className=""
            options={{
              loop: true,
              autoplay: true,
              reverse: true,
              animationData,
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
export { Animation };
