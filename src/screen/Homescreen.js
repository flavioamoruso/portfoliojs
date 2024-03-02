import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
const HomeScreen = () => {
  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2
                className="brand-color"
                style={{
                  marginTop: "10px",
                }}
              >
                {" "}
                COCKTAIL & DREAMS
              </h2>
              <h4>Tutti i cocktail del mondo a portata di click</h4>
            </div>
            <p>
              Cocktail & Dreams è un sito{" "}
              <span className="brand-color"> Gratuito</span> pensato per tutti
              gli appassionati dei drink di tutti i generi
            </p>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default HomeScreen;
