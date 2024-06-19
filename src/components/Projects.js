import React from "react";
import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";

import { ButtonLink, Container, ProjectsContainer } from "./Projects.styles";

const Projects = () => {
  return (
    <Container>
      <ProjectsContainer>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ProjectsContainer>
      <ButtonLink to="/portfolio">Explore all projects</ButtonLink>
    </Container>
  );
};

export default Projects;
