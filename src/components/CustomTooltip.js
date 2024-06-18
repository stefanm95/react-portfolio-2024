import React from "react";

import {
    TooltipCardContainer,
    Title,
    Description,
    Technologies,
    Technology,
} from "./CustomTooltip.styles";

const TooltipCard = ({ project }) => {
    return (
      <TooltipCardContainer>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Technologies>
          {project.technologies.map((tech, index) => (
            <Technology key={index}>{tech}</Technology>
          ))}
        </Technologies>
      </TooltipCardContainer>
    );
  };
  
  export default TooltipCard;