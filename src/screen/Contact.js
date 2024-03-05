import React, { useEffect } from "react";
import AOS from "aos";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}
const Contact = () => {
  return (
    <div class="form-container" data-aos="zoom-in">
      <div class="form">
        <span class="heading">Contattami</span>
        <input placeholder="Nome" type="text" class="input" />
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
            Invia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
export { Animation };
