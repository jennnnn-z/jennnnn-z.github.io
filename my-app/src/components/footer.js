import React from "react";
import styled from 'styled-components'; 

const FooterContainer = styled.footer`
  color: white;
  box-sizing: border-box;
  width: 100%;
  height: min-content; /* 264px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 100px 100px 100px;
  background-color: #000000;
  overflow: hidden;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0;
  position: absolute;
  border-radius: 0px 0px 0px 0px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Jennifer Zhang</p>
    </FooterContainer>
  );
};

export default Footer;
