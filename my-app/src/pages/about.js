import React from "react";
import styled from 'styled-components';

const Text = styled.div`
    box-sizing: border-box;
    flex-shrink: 0;
    height: min-content; /* 350px */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 100px 100px 100px 100px;
    background-color: #598392;
    overflow: hidden;
    flex: 1 0 0px;
    position: relative;
    align-content: center;
    flex-wrap: nowrap;
    gap: 10em;
    border-radius: 0px 0px 0px 0px;
    text-align: left;
`;

const About = () => {
    return (
      <div>
        <Text>
          <h1>About Me</h1>
          <p>
            Jennifer Zhang is a senior majoring in Information Systems at
            Carnegie Mellon University. She has minors in Media Design and
            Human-Computer Interaction.{" "}
          </p>
        </Text>
        <Text>
          <h1>Education</h1>
          <p>
            <b>Carnegie Mellon University</b>
            <br />
            2020 - 2024
            <br />
            Bachelor's Degree in Information Systems
            <br />
            Minors in Media Design and Human-Computer Interaction
          </p>
        </Text>
        <Text>
          <h1 align="left">Experience</h1>
          <p>
            
          </p>
        </Text>
      </div>
    );
};

export default About;