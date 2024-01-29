import React from 'react'
import { projects } from "../data/projectsArray";
import ProjectPage from '../components/ProjectPage'
import { useParams } from "react-router-dom";

const Projectdetail = () => {
  const { projectTitle } = useParams();

  return (
    <ProjectPage project={projects.find(project => project.title === projectTitle)}/>
  )
}

export default Projectdetail