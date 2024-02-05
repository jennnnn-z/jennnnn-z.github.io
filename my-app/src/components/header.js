import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { TitleAndIcon } from "../components/titleAndIcon";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="justify-content-between px-5 py-2 text-primary"
    >
      <Navbar.Brand>
        <TitleAndIcon />
      </Navbar.Brand>
      {/* <div> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
      {/* </div> */}
    </Navbar>
  );
};

export default Header;
