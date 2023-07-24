// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    box-sizing: border-box;
    width: min-content; /* 1200px */
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 24px 24px;
    background-color: #111111;
    align-content: center;
    flex-wrap: nowrap;
    gap: 24;
    position: absolute;
    border-radius: 0px 0px 0px 0px;
`;

export const titleAndIcon = styled.div`
    flex-shrink: 0;
    width: 834px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: visible;
    position: relative;
    padding: 0px 0px 0px 0px;
    align-content: center;
    flex-wrap: nowrap;
    border-radius: 0px 0px 0px 0px;
`;
 
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
  &:hover {
    background-color: #153243;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
