
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row } from 'react-bootstrap';
import '../styles.scss';

const ProjectCard = ({project}) => {
    const [isHovered, setIsHovered] = useState(false);
return (
  <Row key={project.title} className="p-4">
    <Link
      to={`/projects/${project.title}`}
      className={`filterDiv ${project.category}`}
      style={{ color: "#408abf" }}
    >
      <Card
        className={`bg-white text-dark border border-dark p-3 d-flex ${
          isHovered ? "invert-colors" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {" "}
        {/* <Card.Img variant="top" src={project.image} /> */}
        <Card.Body className="text-start d-flex gap-4">
          <Card.Title xs={12} md={4} lg={4} className="text-start fs-4">
            {project.title}
          </Card.Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
            lg={4}
          >
            <Card.Text lg={4} className="text-start">
              {project.description}
            </Card.Text>
            <div className="text-end">
              {project.category.map((category, index) => (
                <span
                  key={index}
                  className="badge bg-secondary p-2 m-1 text-white"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  </Row>
);
}

export default ProjectCard