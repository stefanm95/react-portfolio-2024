import React from "react";
import ProjectCard from "./ProjectCard";

import projectImage1 from "../assets/images/Image1.png";
import projectImage2 from "../assets/images/Image2.png";
import projectImage3 from "../assets/images/Image3.png";
import projectImage4 from "../assets/images/Image4.png";
import { ButtonLink, Container, ProjectsContainer } from "./Projects.styles";

const projects = [
  {
    id: "1",
    title: "Corporate Website Redesign",
    description:
      "Redesigned the corporate website to improve user experience and modernize the visual design.",
    technologies: ["React", "Next.js", "TypeScript", "CSS", "Node.js"],
    startDate: "2023-01-15",
    endDate: "2023-04-30",
    role: "Front-end Developer",
    images: projectImage1,
  },
  {
    id: "2",
    title: "E-commerce Platform Development",
    description:
      "Developed a full-featured e-commerce platform with custom product listings and secure payment integration.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    startDate: "2022-05-01",
    endDate: "2022-12-15",
    role: "Full-stack Developer",
    images: projectImage2,
  },
  {
    id: "3",
    title: "Mobile App for Task Management",
    description:
      "Built a cross-platform mobile app to help users manage their tasks and increase productivity.",
    technologies: ["React Native", "Expo", "Firebase"],
    startDate: "2022-02-10",
    endDate: "2022-07-20",
    role: "Mobile Developer",
    images: projectImage3,
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard to visualize and analyze large datasets for business insights.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    startDate: "2021-09-01",
    endDate: "2022-01-15",
    role: "Front-end Developer",
    images: projectImage4,
  },
];

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
