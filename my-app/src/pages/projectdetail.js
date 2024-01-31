import React from 'react'
import '../styles.css';
import { projects } from "../data/projectsArray";
import { useParams } from "react-router-dom";

const Projectdetail = () => {
  const { projectTitle } = useParams();
  const project = projects.find((p) => p.title === projectTitle);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="bg-light">
      <div className="project-container">
        <h2 className="fs-1">{project.title}</h2>
        {project.course && <p>Course: {project.course}</p>}
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="redounded-lg"
          />
        ) : null}{" "}
        <p className="pt-4">{project.description}</p>
        {project.sourceCodeUrl && (
          <a
            href={project.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary p-3"
            role="button"
          >
            View Source Code
          </a>
        )}
        {project.details && (
          <div>
            {project.details()}
            </div>
        )}
      </div>
    </section>
  );
}

export default Projectdetail