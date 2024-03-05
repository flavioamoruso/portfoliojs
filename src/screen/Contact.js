import React from "react";
const Contact = () => {
  return (
    <div class="form-container">
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
            Send
          </div>
          {/* <div class="reset-button-container">
            <div
              id="reset-btn"
              class="reset-button"
              style={{ cursor: "pointer" }}
            >
              Reset
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
