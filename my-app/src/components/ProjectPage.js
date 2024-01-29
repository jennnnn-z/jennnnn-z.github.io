import React from 'react';
import '../styles.css'; // Assuming you have a CSS file for styling

const ProjectPage = ({ project }) => {
  return (
    <div className="project-container">
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {project.sourceCodeUrl && (
        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code
        </a>
      )}
      {/* You can add more sections here for a detailed walkthrough */}
    </div>
  );
};


export default ProjectPage;
