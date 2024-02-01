import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { TitleAndIcon } from "../components/titleAndIcon";

const Header = () => {
  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="justify-content-between px-5 py-2"
    >
      <Navbar.Brand>
        <TitleAndIcon />
      </Navbar.Brand>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/about" className="ml-auto">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects" className="ml-auto">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
