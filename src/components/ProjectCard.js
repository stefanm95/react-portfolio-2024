import React from "react";
import { Tooltip } from "react-tooltip";
import TooltipCard from "./CustomTooltip";

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
        <Button data-tooltip-id={`tooltip-${project.id}`}>
          View More
        </Button>
      </ButtonsContainer>
      <Tooltip id={`tooltip-${project.id}`} place="top" effect="solid" >
        <TooltipCard project={project} />
      </Tooltip>
    </Card>
  );
};

export default ProjectCard;
