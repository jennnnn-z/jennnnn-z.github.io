

const Project = ({ project }) => {
  return (
    <div
      className={`filterDiv ${project.category}`}
      style={{ color: "#408abf" }}
    >
      <div
        className="row"
        style={{
          backgroundColor: "#193b4d",
          borderRadius: "10px",
          padding: "20px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text load-hidden">
            <h3 className="project-wrapper__text-title">{project.title}</h3>
            <div>
              <p className="mb-4">{project.description}</p>
            </div>
            {project.sourceCodeUrl && (
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href={project.sourceCodeUrl}
              >
                Source Code
              </a>
            )}
          </div>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: project.embed }} /> */}
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image load-hidden">
            {project.imageUrl && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;