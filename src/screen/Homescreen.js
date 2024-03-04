import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assets/animation/animationHome.json";
import ScrollAnimation from "react-animate-on-scroll";

const HomeScreen = () => {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color focus-in-contract-bck">
              {" "}
              Salve a tutti
            </h2>
            <h4 className="focus-in-contract-bck">
              Mi chiamo Flavio Amoruso e sono un web developer junior
            </h4>
          </div>

          <p className="focus-in-contract-bck">
            Questo è il mio sito web personale dove mostro le mie skills
          </p>

          <Link
            to="/projects"
            className="btn btn-primary focus-in-contract-bck"
          >
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
