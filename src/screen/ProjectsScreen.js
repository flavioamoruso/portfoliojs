import React from "react";
import styled from "styled-components";

const StyledProjects = styled.section`
  .section-bold {
    display: grid;
    justify-content: center;
    text-align: center;
  }
`;

const ProjectsScreen = () => {
  return (
    <>
      <StyledProjects>
        <section className="section-bold">
          <h2 style={{ marginTop: "20px" }}>
            Benvenuto al mio portfolio online!
          </h2>
          <p style={{ marginTop: "15px" }}>
            Sono entusiasta di mostrarti una serie di progetti che ho
            realizzato. Prenditi il tempo per esplorare e non esitare a
            contattarmi se hai domande o feedback.
          </p>
        </section>
      </StyledProjects>
    </>
  );
};

export default ProjectsScreen;
