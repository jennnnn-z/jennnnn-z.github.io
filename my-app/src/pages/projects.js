import React, { useEffect, useState }  from "react";
import '../styles.scss';
import { projects } from './projectsArray'
import FilterButton from '../components/FilterButton';
import ProjectList from '../components/ProjectList';
// import images from '../images';


const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filterSelection = (category) => {
    setFilter(category);
  };

  const categories = [
    "all",
    "code",
    "uiux",
    "other",
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          <div
            id="btn-container"
            className="hero-cta load-hidden"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {" "}
            {categories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                filterSelection={filterSelection}
              />
            ))}
          </div>
          <ProjectList filter={filter} projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
