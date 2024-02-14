import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player";
// import "./customStyles.css"; // For any custom styles not covered by Bootstrap

const Home = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center p-4 bg-dark text-center"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(90deg)",
          width: "100vh",
          height: "100vw",
        }}
      >
        <DotLottiePlayer
          src="https://lottie.host/1d2ac87f-fa4a-4fd9-89b0-624da7c26017/7gDd1MBonF.lottie"
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="z-2">
        <h2 className="custom-name fs-2">Hello, I'm</h2>
        <h1 className="fw-bold custom-name">Jennifer Zhang</h1>
        <h3 className="custom-name fs-4">Check out my</h3>
        <div className="mt-3">
          <Link to="/about">
            <Button variant="primary" className="custom-button m-2">
              <span className="button-text">Resume</span>
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="primary" className="custom-button m-2">
              <span className="button-text">Projects</span>
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;