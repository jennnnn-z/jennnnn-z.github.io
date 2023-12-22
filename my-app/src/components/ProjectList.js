import Project from "./Project";
import { projects } from "../data/projectsArray";

const ProjectList = ({ filter }) => {
  const filteredProjects =
    filter === "all"
      ? projects.filter((project) => project.active)
      : projects.filter((project) => project.category.includes(filter) && project.active);

  return (
    <section id="projects">
          {filteredProjects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </section>
  );
};

export default ProjectList;