import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { TitleAndIcon } from "../components/titleAndIcon";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5 py-2">
      <Navbar.Brand>
        <TitleAndIcon />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <LinkContainer to="/about">
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
