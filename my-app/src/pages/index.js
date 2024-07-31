import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./customStyles.css"; // For any custom styles not covered by Bootstrap
import myGif from "../images/2024-05-24-jennifer-zhang.gif";
import { FiCamera, FiArrowRight, FiMoon } from "react-icons/fi";

const Home = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomKeyframes() {
    const fromTransform = `translate(${getRandomInt(
      -200,
      200
    )}px, ${getRandomInt(-200, 200)}px) rotate(${getRandomInt(-180, 180)}deg)`;
    const toTransform = `translate(${getRandomInt(-200, 200)}px, ${getRandomInt(
      -200,
      200
    )}px) rotate(${getRandomInt(-180, 180)}deg)`;

    const fromBorderRadius = `${getRandomInt(20, 80)}% ${getRandomInt(
      20,
      80
    )}% ${getRandomInt(20, 80)}% ${getRandomInt(20, 80)}% / ${getRandomInt(
      20,
      80
    )}% ${getRandomInt(20, 80)}% ${getRandomInt(20, 80)}% ${getRandomInt(
      20,
      80
    )}%`;
    const toBorderRadius = `${getRandomInt(20, 80)}% ${getRandomInt(
      20,
      80
    )}% ${getRandomInt(20, 80)}% ${getRandomInt(20, 80)}% / ${getRandomInt(
      20,
      80
    )}% ${getRandomInt(20, 80)}% ${getRandomInt(20, 80)}% ${getRandomInt(
      20,
      80
    )}%`;

    return `
    @keyframes move {
      from {
        transform: ${fromTransform};
        border-radius: ${fromBorderRadius};
      }
      to {
        transform: ${toTransform};
        border-radius: ${toBorderRadius};
      }
    }
  `;
  }

  function injectKeyframes() {
    const style = document.createElement("style");
    style.innerHTML = generateRandomKeyframes();
    document.head.appendChild(style);
  }

  injectKeyframes();
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center p-4 text-center main-container"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div className="home-container z-2">
        <h2 className="custom-name fs-2">Hello, I'm</h2>
        <img src={myGif} alt="Jennifer Zhang" className="w-100" />
        {/* <h1 className="fw-bold custom-name">Jennifer Zhang</h1> */}
        <h3 className="custom-name fs-4">Check out my</h3>
        <div className="mt-3">
          <Link to="/about">
            <Button className="custom-button m-2 btn_nav">
              <span className="button-text text-uppercase">Resume</span>
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="primary" className="custom-button m-2 btn_nav">
              <span className="button-text text-uppercase">Projects</span>
            </Button>
          </Link>
        </div>
        <div className="pt-5 ml-5">
          My art is also on the moon!
          <FiArrowRight className="px-1" />
          <a href="https://lun.art/" target="_blank" rel="noreferrer">
            <FiMoon size={"2em"} className="underline text-dark" />
          </a>
        </div>
        <div className="pt-5 ml-5">
          I also occasionally take pictures
          <FiArrowRight className="px-1" />
          <a
            href="https://www.behance.net/jenniferzhang20"
            target="_blank"
            rel="noreferrer"
          >
            <FiCamera size={"2em"} className="underline text-dark" />
          </a>
        </div>
      </div>
      <div className="blob" />
    </Container>
  );
};

export default Home;

