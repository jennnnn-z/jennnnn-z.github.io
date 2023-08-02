import React, { useEffect, useState }  from "react";
import '../styles.scss';

const Projects = () => {
  useEffect(() => {
    // Add inline styles to the body element when the component mounts
    document.body.style.backgroundColor = "lightblue";
    document.body.style.color = "white";

    // Clean up by removing the inline styles when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);
  
  const [filter, setFilter] = useState("all");

  const filterSelection = (category) => {
    setFilter(category);
  };

  const projects = [
    {
      title: "Pittsburghers for Public Transit Website Improvement",
      category: "uiux",
      active: true,
      description: "Worked with a team of 2 to improve the Pittsburghers for Public Transit website, including increased calls to action, event list integration, and improved accessibility. ",
    }, 
    {
      title: "Mitigating Toxic Behaviors Instagram Feature",
      category: "uiux",
      active: true,
      description: "Worked with a team of 6 to create a few features to limit trolling and spam. Involved user research, wireframing, and prototyping",
    },
    {
      title: "Activity Generator",
      category: "code",
      active: true,
      description: "Created a full stack application using a RESTful API...",
      imageUrl: "../img/project.jpg",
    },
    {
      title: "Great Pittsburgh Baking Outlet",
      category: "code",
      active: true,
      description: "Created a mock e-commerce application using Ruby on Rails...",
    },
    {
      title: "Cross Country Connections",
      category: "physical",
      active: true,
      description: "",
    }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          <div className="row">
            <div id="btn-container" className="hero-cta load-hidden" style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}>
              <button
                className={`cta-btn cta-btn--hero ${
                  filter === "all" ? "active" : ""
                } filters`}
                onClick={() => filterSelection("all")}
              >
                Show all
              </button>
              <button
                className={`cta-btn cta-btn--hero ${
                  filter === "code" ? "active" : ""
                } filters`}
                onClick={() => filterSelection("code")}
              >
                Apps/Coding
              </button>
              <button
                className={`cta-btn cta-btn--hero ${
                  filter === "uiux" ? "active" : ""
                } filters`}
                onClick={() => filterSelection("uiux")}
              >
                UI/UX
              </button>
              <button
                className={`cta-btn cta-btn--hero ${
                  filter === "pm" ? "active" : ""
                } filters`}
                onClick={() => filterSelection("pm")}
              >
                Project Management
              </button>
              <button
                className={`cta-btn cta-btn--hero ${
                  filter === "physical" ? "active" : ""
                } filters`}
                onClick={() => filterSelection("physical")}
              >
                Physical
              </button>
            </div>
          </div>

          {filteredProjects.map((project, index) => (
            <div key={index} className={`filterDiv ${project.category}`}>
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="project-wrapper__text load-hidden">
                    <h3 className="project-wrapper__text-title">
                      {project.title}
                    </h3>
                    <div>
                      <p className="mb-4">{project.description}</p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn cta-btn--hero"
                      href={project.sourceCodeUrl}
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href="#!" target="_blank">
                      <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        className="thumbnail rounded js-tilt"
                      >
                        <img
                          alt="Project pic"
                          className="img-fluid"
                          src={project.imageUrl}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
