import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./customStyles.css"; // For any custom styles not covered by Bootstrap
import myGif from '../images/2024-05-24-jennifer-zhang.gif'
import { FiCamera, FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center p-4 text-center"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(90deg)",
          width: "100vh",
          height: "100vw",
        }}
      > */}
        {/* <DotLottiePlayer
          src="https://lottie.host/1d2ac87f-fa4a-4fd9-89b0-624da7c26017/7gDd1MBonF.lottie"
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        /> */}
      {/* </div> */}
      <div className="z-2">
        <h2 className="custom-name fs-2">Hello, I'm</h2>
        <img src={myGif} alt="Jennifer Zhang" className="w-100"/>
        {/* <h1 className="fw-bold custom-name">Jennifer Zhang</h1> */}
        <h3 className="custom-name fs-4">Check out my</h3>
        <div className="mt-3">
          <Link to="/about">
            <Button className="custom-button m-2">
              <span className="button-text text-uppercase">Resume</span>
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="primary" className="custom-button m-2">
              <span className="button-text text-uppercase">Projects</span>
            </Button>
          </Link>
        </div>
        <div className="pt-5 ml-5">
          I also occasionally take pictures
          <FiArrowRight className="px-1"/>
          <a href="https://www.behance.net/jenniferzhang20" target="_blank" rel="noreferrer">
            <FiCamera />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Home;