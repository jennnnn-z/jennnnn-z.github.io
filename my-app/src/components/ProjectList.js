import Project from "./ProjectCard";
import { projects } from "../data/projectsArray";
import { motion } from "framer-motion";

const ProjectList = ({ filter }) => {
  return (
    <motion.div
      className="p-4 m-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {projects
        .filter(
          (project) =>
            (filter === "all" && project.active) ||
            project.category.includes(filter)
        )
        .map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
          >
            <Project project={project} />
          </motion.div>
        ))}
    </motion.div>
  );
};

export default ProjectList;