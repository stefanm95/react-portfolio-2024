import React from "react";
import { Card, BoxText, BoxSubText, Icon } from "./SkillsCard.styles";


const SkillsCard = ({ skill }) => {
  return (
    <>
      <Card>
        <Icon src={skill.image} alt={skill.title}/>

        
        <BoxText>{skill.title}</BoxText>
        <BoxSubText>{skill.description}</BoxSubText>
      </Card>
    </>
  );
};

export default SkillsCard;
