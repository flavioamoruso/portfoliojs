import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}

const Contact = () => {
  return (
    <>
      <div className="home-hero" data-aos="fade-left">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h3 className="brand-color">
              Per maggiori informazioni non esitate a contattarmi
            </h3>
            <p>Email: flavioamoruso6@gmail.com</p>
            <p>Telefono: +39 3703081095</p>
          </div>
        </div>
        <div className="home-hero-img focus-in-contract-bck">
          <form
            className="form"
            action="https://formspree.io/f/xwkgqqpa"
            method="POST"
          >
            <p class="title">Contattami </p>
            <div class="flex">
              <label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder=""
                  required=""
                />
                <span>Nome</span>
              </label>

              <label>
                <input
                  className="input"
                  type="text"
                  name="surname"
                  placeholder=""
                  required=""
                />
                <span>Cognome</span>
              </label>
            </div>

            <label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder=""
                required=""
              />
              <span>Email</span>
            </label>
            <label>
              <textarea placeholder="" name="message" className="input" />
              <span>Richiesta</span>
            </label>
            <button style={{ cursor: "pointer" }} type="submit" class="submit">
              Invia
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
export { Animation };
