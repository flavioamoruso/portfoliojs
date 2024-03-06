import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}

const StyledForm = styled.form`
  .form-container {
    text-align: center;
    margin: 30px;
    background-color: var(--input-back);
    padding: 35px;
    border-left: 5px solid #002733;
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 20px),
      calc(100% - 20px) 100%,
      0 100%
    );
  }

  .heading {
    display: block;
    color: var(--text-input);
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .form-container .form .input {
    color: white;
    width: 100%;
    background-color: #002733;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-left: 1px solid transparent;
  }

  .form-container .form .input:focus {
    border-left: 5px solid var(--nav-colors-2);
  }

  .form-container .form .textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #013747;
    color: white;
    font-weight: bold;
    resize: none;
    max-height: 150px;
    margin-bottom: 20px;
    border-left: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .textarea:focus {
    border-left: 5px solid var(--nav-colors-2);
  }
`;

const Contact = () => {
  return (
    <StyledForm data-aos="zoom-in">
      <form action="https://formspree.io/f/mnqezqlw" method="POST">
        <div class="form-container">
          <div class="form">
            <span class="heading">Contattami</span>
            <input placeholder="Nome" type="text" class="input" id="nome" />
            <input
              placeholder="Cognome"
              type="text"
              class="input"
              id="cognome"
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

            <button class="btn" style={{ padding: "16px", cursor: "pointer" }}>
              Invia
            </button>
          </div>
        </div>
      </form>
    </StyledForm>
  );
};

export default Contact;
export { Animation };
