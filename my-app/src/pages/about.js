import React from "react";
import styled from 'styled-components';

const Text = styled.section`
  width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    height: min-content; /* 350px */
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding: 10px 100px;
    background-color: #598392;
    overflow: hidden;
    flex: 1 0 0px;
    position: relative;
    align-content: left;
    flex-wrap: nowrap;
    gap: 10px;
    border-radius: 0px 0px 0px 0px;
    text-align: left;
`;

const Wrapper = styled.div`
;`

const About = () => {
    return (
      <Wrapper>
        <Text style={{ padding: "100px 100px 10px 100px" }}>
          <p>
            <b>Jennifer Zhang</b> is a senior majoring in Information Systems at
            Carnegie Mellon University. She has minors in Media Design and
            Human-Computer Interaction. She is passionate about creating random
            and sometimes useful things.
          </p>
        </Text>
        <Text>
          <h1>Education</h1>
          <hr />
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
        <Text style={{ padding: "10px 100px 100px 100px" }}>
          <h1 style={{ paddingBottom: "5px"}}>Experience</h1>
          <hr />
          <p>
            <b>Erie Insurance</b>
            <br />
            IT Customer Service Portfolio Intern
            <br />
            <i>May - August 2023</i>
            <br />
            <br />
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
                Remedied 8 CSS defects in a newly developed Mendix application,
                resulting in a more uniform, visually appealing, and
                user-centric application interface.
              </li>
            </ul>
            <br />
            Asset Management Analyst / PM Intern
            <br />
            <i>May - August 2022</i>
            <br />
            <br />
            <ul>
              <li>
                Developed a comprehensive CM practice guide for IT Service
                Management, which enabled the team to establish and maintain an
                effective and efficient configuration management process.
              </li>
              <li>
                Managed ~350 Configuration Items (CIs) in the Configuration
                Management Database (CMDB) by creating and updating them,
                ensuring the CMDB's accuracy and relevance.
              </li>
              <li>
                Compiled quarterly metrics to compare the CIs in the CMDB to
                their source documents, identifying discrepancies and allowing
                us to quickly address any issues.
              </li>
            </ul>
          </p>
        </Text>
      </Wrapper>
    );
};

export default About;