import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./customStyles.css"; // For any custom styles not covered by Bootstrap
// import myGif from "../images/2024-05-24-jennifer-zhang.gif";
import Blob from '../components/Blob';
import {
  FiCamera,
  FiArrowRight,
  FiMoon,
  FiCornerLeftDown,
  FiCornerRightDown,
} from "react-icons/fi";
import { motion } from 'framer-motion'; 

const name = "jennifer zhang";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
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
      <motion.div
        className="home-container z-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
      >
        <h2 className="custom-name fs-2">Hello, I'm</h2>
        <motion.h2
          className="custom-name fs-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {name.split("").map((letter, index) => (
            <motion.span key={index} variants={ letterVariants }>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <div className="d-flex flex-row justify-content-center">
          <FiCornerLeftDown size={"2em"}/>
          <h3 className="custom-name fs-4">Check out my</h3>
          <FiCornerRightDown size={"2em"}/>
        </div>
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
      </motion.div>
      <Blob />
    </Container>
  );
};

export default Home;

