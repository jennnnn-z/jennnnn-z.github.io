import Project from "./ProjectCard";
import { projects } from "../data/projectsArray";
// import { Col } from "react-bootstrap";

const ProjectList = ({ filter }) => {
  return (
    // <Col xs={1} md={2} lg={12} className="d-flex gap-4 p-4">
    <div className="p-4 m-4">
      {projects
        .filter(
          (project) =>
            (filter === "all" && project.active) ||
            project.category.includes(filter)
        )
        .map((project) => (
          <Project project={project} key={project.title} />
        ))}
    </div>
    // </Col>
  );
};

// const ProjectList = ({ filter }) => {
//   const filteredProjects =
//     filter === "all"
//       ? projects.filter((project) => project.active)
//       : projects.filter((project) => project.category.includes(filter) && project.active);

//   return (
//     <section id="projects">
//           {filteredProjects.map((project, index) => (
//             <Project key={index} project={project} />
//           ))}
//         </section>
//   );
// };

export default ProjectList;