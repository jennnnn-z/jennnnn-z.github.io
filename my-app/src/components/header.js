import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion } from "framer-motion";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
`;

const TitleAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const SvgIcon = styled(motion.img)`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

const TitleAndIcon = () => {
  return (
    <TitleAndIconContainer to="/">
      <SvgIcon
        src="../img/Vector.svg"
        alt="Jennifer Zhang"
      />
    </TitleAndIconContainer>
  );
};

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px 16px;

  &:hover {
    background-color: #ddd;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <TitleAndIcon />
      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Navbar>
  );
};

export default Header;
