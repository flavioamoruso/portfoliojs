import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <section className="introduce-skill">
          <h2>Le mie skills</h2>
          <p style={{ marginTop: "14px" }}>
            Scrivo codice usando i linguaggi seguenti:
            HTML,CSS,JAVASCRIPT,PHP,REACT.JS,TYPESCRIPT
          </p>
        </section>

        <div className="skill-container">
          <div className="cart">
            <SiHtml5 size={62} />
          </div>
          <div className="cart">
            <SiCss3 size={62} />
          </div>
          <div className="cart">
            <SiJavascript size={62} />
          </div>
          <div className="cart">
            <SiPhp size={62} />
          </div>
          <div className="cart">
            <GrReactjs size={62} />
          </div>
          <div className="cart">
            <SiTypescript size={62} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
