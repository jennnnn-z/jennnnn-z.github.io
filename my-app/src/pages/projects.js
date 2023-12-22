import React, { useEffect, useState }  from "react";
import '../styles.scss';
import FilterButton from '../components/FilterButton';
import ProjectList from '../components/ProjectList';


const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filterSelection = (category) => {
    if (category === "all") {
      setFilter("all");
    }
    else if (category !== "code" && category !== "uiux") {
      setFilter("other");
    } else {
      setFilter(category);
    }
  };

  const categories = [
    "all",
    "code",
    "uiux",
    "other",
  ];

  return (
    <section id="projects" style={{ backgroundColor: "lightslategray" }}>
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
            {categories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                filterSelection={filterSelection}
                currentFilter={filter}
              />
            ))}
          </div>
          <ProjectList filter={filter} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
