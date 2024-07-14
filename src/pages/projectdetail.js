import React from 'react'
import '../styles.css';
import { projects } from "../data/projectsArray";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Projectdetail = () => {
  const { projectTitle } = useParams();
  const project = projects.find((p) => p.title === projectTitle);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="bg-white">
      <div className="project-container text-dark">
        <Row className="align-items-center">
          <Col>
            <h2 className="fs-1 text-dark fw-bold">{project.title}</h2>
          </Col>
          {project.sourceCodeUrl && (
            <Col className="text-end">
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary  p-3 text-dark"
                role="button"
              >
                View Source Code
              </a>
            </Col>
          )}
        </Row>
        {project.course && <p>Course: {project.course}</p>}
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-lg my-3"
          />
        ) : null}{" "}
        <p className="px-5 py-5 bg-white rounded">{project.description}</p>
        {project.details ? (
          <div className="my-3 px-5 py-1 bg-white border border-dark rounded">
            {project.details()}
          </div>
        ) : (
          <div>Project info provided on request. </div>
        )}
      </div>
    </section>
  );
}

export default Projectdetail