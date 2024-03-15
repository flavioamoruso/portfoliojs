import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationdata from "../assets/animation/animationError.json";
import useTitle from "../useTitle";

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --web-kit-grid;
  place-items: center;
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

const ErrorScreen = () => {
  useTitle("Not Found");
  return (
    <>
      <Wrapper>
        <h1>Pagina non trovata</h1>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            reverse: true,
            animationData: animationdata,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          width={300}
          height={300}
        />
        <Link to="/" className="btn btn-primary">
          Torna indietro
        </Link>
      </Wrapper>
    </>
  );
};

export default ErrorScreen;
