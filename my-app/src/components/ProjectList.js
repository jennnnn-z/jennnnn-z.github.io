import Project from "./ProjectCard";
import { projects } from "../data/projectsArray";
import { Card, Row, Col } from "react-bootstrap";

const ProjectList = ({ filter }) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {projects
        .filter((project) => (filter === "all" && project.active) || project.category === filter)
        .map((project) => (
          <Project project={project}/>
        ))}
    </Row>
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