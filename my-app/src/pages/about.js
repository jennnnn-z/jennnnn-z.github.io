import React from "react";
import styled from 'styled-components';

const Text = styled.section`
    box-sizing: border-box;
    flex-shrink: 0;
    height: min-content; /* 350px */
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    padding: 100px 100px 100px 100px;
    background-color: #598392;
    overflow: hidden;
    flex: 1 0 0px;
    position: relative;
    align-content: left;
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
          <h1 align="left">Education</h1>
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
            <b>Erie Insurance</b>
            <br />
            IT Customer Service Portfolio Intern
            <br />
            <i>May - August 2023</i>
            <br /><br />
            <i>Pre-Sprint 0/Sprint 0 Tracker Template</i>
            <ul>
              <li>
                Enhanced the Sprint 0 tracker template, integrating 6 UX
                improvements to better integrate the UX process in the existing
                portfolio project lifecycle.
              </li>
              <li>
                Crafted and delivered a visually intuitive iteration of the
                tracker using Miro, improving project coordination and alignment
                among 8 teams.
              </li>
            </ul>
            <i>Porfolio RACI Document</i>
            <ul>
              <li>
                Collaborated with 15 leaders to refine roles and establish a
                comprehensive RACI framework, promoting effective collaboration
                and ensuring transparent accountability within cross-functional
                teams.
              </li>
            </ul>
            <i>Clarity Roadmap Exploration</i>
            <ul>
              <li>
                Conducted an extensive exploration of Clarity's roadmap feature,
                presenting comprehensive documentation of its advantages,
                challenges, and considerations.
              </li>
              <li>
                Met with 4 teams to create a proof of concept of the roadmap
                feature for the portfolio.
              </li>
            </ul>
            <i>CSS Defects</i>
            <ul>
              <li>
Remedied 8 CSS defects in a newly developed Mendix application, resulting in a more uniform, visually appealing, and
                user-centric application interface. 
              </li>
            </ul>
          </p>
        </Text>
      </div>
    );
};

export default About;