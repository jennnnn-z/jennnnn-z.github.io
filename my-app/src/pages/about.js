import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="p-5 text-start text-primary">
      <Row className="m-5 border-0 rounded">
        <Col className="p-5 " style={{ borderRadius: "0" }}>
          <p>
            Jennifer Zhang is a senior majoring in Information Systems at
            Carnegie Mellon University. She has minors in Media Design and
            Human-Computer Interaction. She is passionate about creating random
            and sometimes useful things.
          </p>
        </Col>
      </Row>
      <Row className="m-5 bg-secondary rounded">
        <Col className="p-5" style={{ borderRadius: "0" }}>
          <h1>Education</h1>
          <hr />
          <p>
            <strong className="fs-4">Carnegie Mellon University</strong>
            <br />
            2020 - 2024
            <br />
            Bachelor's Degree in Information Systems
            <br />
            Minors in Media Design and Human-Computer Interaction
          </p>
        </Col>
      </Row>
      <Row className="m-5 bg-secondary rounded">
        <Col className="p-5 text-left" style={{ borderRadius: "0" }}>
          <h1 style={{ paddingBottom: "5px" }}>Experience</h1>
          <hr />
          <p>
            <strong className="fs-4">Erie Insurance</strong>
            <br />
            IT Customer Service Portfolio Intern
            <br />
            <i>May - August 2023</i>
            <br />
            {/* <i>Pre-Sprint 0/Sprint 0 Tracker Template</i> */}
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
              <li>
                Collaborated with 15 leaders to refine roles and establish a
                comprehensive RACI framework, promoting effective collaboration
                and ensuring transparent accountability within cross-functional
                teams.
              </li>
              <li>
                Conducted an extensive exploration of Clarity's roadmap feature,
                presenting comprehensive documentation of its advantages,
                challenges, and considerations.
              </li>
              <li>
                Met with 4 teams to create a proof of concept of the roadmap
                feature for the portfolio.
              </li>
              <li>
                Remedied 8 CSS defects in a newly developed Mendix application,
                resulting in a more uniform, visually appealing, and
                user-centric application interface.
              </li>
            </ul>
          </p>
          <p>
            Asset Management Analyst / PM Intern
            <br />
            <i>May - August 2022</i>
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
        </Col>
      </Row>
    </Container>
  );
};

export default About;
