import React, { useEffect } from "react";
import AOS from "aos";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}
const Contact = () => {
  return (
    <form
      action="https://formspree.io/f/mnqezqlw"
      method="POST"
      data-aos="zoom-in"
    >
      <div class="form-container">
        <div class="form">
          <span class="heading">Contattami</span>
          <input placeholder="Nome" type="text" class="input" id="nome" />
          <input
            placeholder="Cognome"
            type="text"
            class="input"
            id="cognome"
            value=""
          />
          <input
            placeholder="Telefono (+39 333 70 30 821)"
            type="number"
            class="input"
            id="telefono"
          />
          <input placeholder="Email" id="mail" type="email" class="input" />
          <textarea
            placeholder="Cosa ti serve?"
            rows="10"
            cols="30"
            id="message"
            name="message"
            class="textarea"
          ></textarea>
          <div class="button-container">
            <div class="send-button" style={{ cursor: "pointer" }}>
              <button type="submit">Invia</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
export { Animation };
