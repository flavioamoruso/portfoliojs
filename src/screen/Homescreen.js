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
            <p className="brand-color">Salve a tutti</p>
            <h2 className="brand-color">Il mio nome è Flavio</h2>
            <h4>Sono un Full Stack Developer Junior</h4>
          </div>

          <p>
            "Benvenuti nel mio portfolio creativo! Esplora il mio lavoro
            variegato e innovativo, dove arte, design e tecnologia si fondono
            per ispirare e stupire."
          </p>

          <Link to="/contact" className="btn btn-primary">
            Contattami
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
