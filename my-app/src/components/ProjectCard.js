
import React from 'react'
import { Link } from "react-router-dom";
import { Card, Col } from 'react-bootstrap'

const ProjectCard = ({project}) => {
  return (
    <Col key={project.title}>
      <Link
        to={`/projects/${project.title}`}
        className={`filterDiv ${project.category}`}
        style={{ color: "#408abf" }}
      >
        <Card className="bg-dark text-primary shadow p-3">
          <Card.Img variant="top" src={project.image} />
          <Card.Body className="text-start">
            <Card.Title className="text-center fs-2 fw-bold">
              {project.title}
            </Card.Title>
            <Card.Text className="text-start">{project.description}</Card.Text>
            {project.category.map((category, index) => (
              <span key={index} className="badge bg-primary p-2 m-1">
                {category}
              </span>
            ))}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default ProjectCard