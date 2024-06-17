import React from "react";
import Navbar from "../components/Navbar";
import {
  BigText,
  Text,
  Container,
  ScrollDown,
  HorizontalLine,
  ProjectsContainer,
  ContainerBox,
} from "../pages/Portfolio.styles";

import ProjectCard from "../components/ProjectCard";

import projectImage1 from "../assets/images/projects/Image.png";
import projectImage2 from "../assets/images/projects/Image2.png";
import projectImage3 from "../assets/images/projects/Image2.png";
import projectImage4 from "../assets/images/projects/Image3.png";
import { ReactComponent as ScrollDownSvg } from "../assets/images/Group 483313.svg";
import { Footer } from "../components/Footer";

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard to visualize and analyze large datasets for business insights.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    startDate: "2021-09-01",
    endDate: "2022-01-15",
    role: "Front-end Developer",
    images: projectImage4,
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard to visualize and analyze large datasets for business insights.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    startDate: "2021-09-01",
    endDate: "2022-01-15",
    role: "Front-end Developer",
    images: projectImage4,
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard to visualize and analyze large datasets for business insights.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    startDate: "2021-09-01",
    endDate: "2022-01-15",
    role: "Front-end Developer",
    images: projectImage3,
  },
  {
    id: 7,
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard to visualize and analyze large datasets for business insights.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    startDate: "2021-09-01",
    endDate: "2022-01-15",
    role: "Front-end Developer",
    images: projectImage2,
  },
  {
    id: 8,
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard to visualize and analyze large datasets for business insights.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    startDate: "2021-09-01",
    endDate: "2022-01-15",
    role: "Front-end Developer",
    images: projectImage1,
  },
];
const Portfolio = () => {
  const handleScrollDown = () => {
    const element = document.getElementById("section--2");
    const navbar = document.querySelector('nav'); // Select the navbar
  
    if (!element) {
      console.error("Element with ID 'section--2' not found.");
      return;
    }
  
    if (!navbar) {
      console.error("Navbar element not found.");
      return;
    }
  
    const navbarHeight = navbar.offsetHeight; // Get the navbar height
  
    window.scrollTo({
      top: element.offsetTop - navbarHeight, // Subtract the navbar height from the scroll position
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Container id="section--1">
        <BigText>
          <Text>Showcasing my</Text>
          <Text lastWordColor="grey">skill</Text>
        </BigText>
        <BigText>
          <Text>and</Text>
          <Text lastWordColor="grey">passion</Text>
        </BigText>

        <ScrollDown onClick={handleScrollDown}>
          <ScrollDownSvg />
        </ScrollDown>
      </Container>
      <HorizontalLine />
      <ContainerBox id="section--2">
        <ProjectsContainer>
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ProjectsContainer>
      </ContainerBox>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Portfolio;
