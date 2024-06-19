import React, { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import TooltipCard from "./CustomTooltip";

import LazyImage from "../components/LazyImage";
import { observeElements } from "../utils";

import { Button, ButtonsContainer, Card } from "./ProjectCard.styles";

export const ProjectCard = ({ project }) => {
  useEffect(() => {
    observeElements(".boxAnimation", "animate");
  }, []);

  return (
    <Card className="boxAnimation">
      <LazyImage src={project.images} alt={project.title} />
      <ButtonsContainer>
        <Button>Landing Page</Button>
        <Button data-tooltip-id={`tooltip-${project.id}`}>View More</Button>
      </ButtonsContainer>
      <Tooltip id={`tooltip-${project.id}`} place="top" effect="solid">
        <TooltipCard project={project} />
      </Tooltip>
    </Card>
  );
};

export default ProjectCard;
