import React from "react";
import styled from 'styled-components'; 
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";



const FooterContainer = styled.footer`
  color: lightgray;
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

const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  gap: 20px;
  color: lightgray;
  font-size: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Jennifer Zhang</p>
      <SocialIcons>
      <SocialIcon
          href="https://www.linkedin.com/jenniferzhang02/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
      </SocialIcon>
      <SocialIcon
        href="https://github.com/in/jenniferzhang02"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </SocialIcon>
      <SocialIcon
        href="mailto:jenzhang02@protonmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FiMail />
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
