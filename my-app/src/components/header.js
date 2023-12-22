import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {TitleAndIcon } from '../components/titleAndIcon';


const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 20px;
  // z-index: 0;
`;


const NavLink = styled(Link)`
  color: #888888;
  text-decoration: none;
  font-weight: 700;
  position: relative;
  padding: 8px 16px;
  transition: all 0.3s ease-in-out;
  margin: 20px;

  &::before {
    content: "";
    background-color: hsla(196, 61%, 58%, 0.5);
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 4px;
    z-index: 1;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    bottom: 0;
    height: 100%;
    border-radius: 20px;
  }
  &:hover {
    color: white;
  }
`;

const Header = () => {
  return (
    <Navbar>
        <TitleAndIcon />
      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </Navbar>
  );
};

export default Header;
