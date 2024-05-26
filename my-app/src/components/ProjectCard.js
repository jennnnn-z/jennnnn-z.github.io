
import React from 'react'
import { Link } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';
import '../styles.scss';

const ProjectCard = ({project}) => {
  return (
    <Col key={project.title}>
      <Link
        to={`/projects/${project.title}`}
        className={`filterDiv ${project.category}`}
        style={{ color: "#408abf" }}
      >
        <Card className="bg-white text-dark border border-dark p-3">
          <Card.Img variant="top" src={project.image} />
          <Card.Body className="text-start">
            <Card.Title className="text-center fs-2 fw-bold">
              {project.title}
            </Card.Title>
            <Card.Text className="text-start">{project.description}</Card.Text>
            {project.category.map((category, index) => (
              <span key={index} className="badge bg-secondary p-2 m-1 text-white">
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