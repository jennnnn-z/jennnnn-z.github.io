import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { TitleAndIcon } from "../components/titleAndIcon";
import hamburger  from "../images/hamburger-icon.png";

const Header = () => {
  return (
    <Navbar
      bg="none"
      expand="md"
      className="justify-content-between px-5 py-2 text-primary bg-transparent"
    >

        <Navbar.Brand>
          <TitleAndIcon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-navbar-toggle">
          <img src={hamburger} alt="hamburger" style={{width: "5vw", height: "auto"}} className="ml-0"/>
        </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto fs-3">
          <LinkContainer to="/about">
            <Nav.Link active={false} className="custom-link">
              Resume
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link active={false} className="custom-link">
              Projects
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
