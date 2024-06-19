import React from "react";
import Navbar from "../components/Navbar";

import { portfolioProjects as projects } from "../data/projects";

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

import { ReactComponent as ScrollDownSvg } from "../assets/images/Group 483313.svg";
import { Footer } from "../components/Footer";

import { handleScrollDown } from "../utils/index.js";


const Portfolio = () => {
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
