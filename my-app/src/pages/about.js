import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <motion.div
      className="p-4 m-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <Container className="container-md text-start text-dark">
        <motion.div variants={sectionVariants}>
          <Row className="m-5 border border-dark rounded">
            <Col className="p-5 " style={{ borderRadius: "0" }}>
              <p>
                Jennifer Zhang is a recent graduate with a major in Information
                Systems at Carnegie Mellon University. She has minors in Media
                Design and Human-Computer Interaction. She is passionate about
                creating random and sometimes useful things (for example: sewing
                puffy flowers with sensors as an art installation, crocheting so
                many animals, etc. )
              </p>
            </Col>
          </Row>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Row className="m-5 border border-dark rounded">
          <Col className="p-5" style={{ borderRadius: "0" }}>
            <h1 className="fs-2">Education</h1>
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
            <p>
              <strong className="fs-4">Fudan University</strong>
              <br />
              Feb - Jun 2024
              <br />
              Study Abroad
            </p>
          </Col>
          </Row>
        </motion.div>
        <motion.div variants={sectionVariants}>
        <Row className="m-5 border border-dark rounded">
          <Col className="p-5 text-left" style={{ borderRadius: "0" }}>
            <h1 className="fs-2" style={{ paddingBottom: "5px" }}>
              Experience
            </h1>
            <hr />
              {/* <p> */}
              <strong className="fs-4">ASML</strong>
              <br />
              Data Scientist
              <br />
              <i>Oct 2024 - Present</i>
              <br />
              <ul>
                <li>Process and clean large datasets using Python (pandas, numpy) to prepare data for analysis and visualization</li>
                <li>Create dynamic dashboards and reports using Power BI to provide stakeholders with actionable data insights and trends</li>
                <li>Developing a data pipeline using Databricks that transforms raw data into multiple dashboard inputs, improving data processing efficiency for team-driven decision-making</li>
                <li>Enhance application functionality through front-end and back-end development, implementing new features to improve overall system capabilities</li>
                <li>Collaborate with team members to document Python application development and usage processes, creating standardized procedures for knowledge transfer</li>
                <li>Currently developing a machine learning model to predict machine failures and categorize failure types</li>
              </ul>
            <strong className="fs-4">Avansight</strong>
              <br />
              Frontend Developer 
              <br />
              <i>Aug 2024 - Oct 2024</i>
              <br />
              <ul>
                <li>Developed and maintained dynamic data tables and summary panels with advanced features including template import/export, filter handling, and conditional formatting</li>
                <li>Collaborated with backend and frontend teams to integrate and troubleshoot API calls, ensuring seamless data transfer between systems</li>
                <li>Implemented new UI features including collapsible navigation, responsive layouts, and customizable table properties to enhance user experience</li>
                <li>Utilized Docker and Azure for application deployment and management, troubleshooting environment-specific issues and integrating third-party services</li>
              </ul>

            <strong className="fs-4">Erie Insurance</strong>
            <br />
            Project Management/UX Intern
            <br />
            <i>May - August 2023</i>
            <br />
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
            {/* </p> */}
            {/* <p> */}
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
          </Col>
          </Row>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default About;
