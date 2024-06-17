import React from "react";

import {
  Image,
  Button,
  ButtonsContainer,
  Card,
} from "./ProjectCard.styles";

export const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.images} alt={project.title} />
      <ButtonsContainer>
        <Button>Landing Page</Button>
        <Button>Technologies</Button>
        <Button>View More</Button>
      </ButtonsContainer>
    </Card>
  );
};

export default ProjectCard;
