import React, { useEffect } from "react";
import AOS from "aos";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import useTitle from "../useTitle";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}

const Contact = () => {
  useTitle("Contattami");
  return (
    <>
      <div className="home-hero" data-aos="fade-left">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h3 className="brand-color">
              Per maggiori informazioni non esitate a contattarmi
            </h3>
            <p>
              <MdMarkEmailRead /> Email: flavioamoruso6@gmail.com{" "}
            </p>
            <p>
              <BsFillTelephoneFill /> Telefono: +39 3703081095{" "}
            </p>
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
                  placeholder="Bob"
                  required=""
                />
                <span>Nome</span>
              </label>

              <label>
                <input
                  className="input"
                  type="text"
                  name="surname"
                  placeholder="Marley"
                  required=""
                />
                <span>Cognome</span>
              </label>
              <label>
                <input
                  className="input"
                  type="number"
                  name="number"
                  placeholder="+39 3467789764"
                  required=""
                />
                <span>Cellulare</span>
              </label>
            </div>

            <label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="bobmarley@gmail.com"
                required=""
              />
              <span>Email</span>
            </label>
            <label>
              <textarea
                placeholder="Cosa ti serve?"
                name="message"
                className="input"
              />
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
