import React from "react";

import { skills } from "../data/skills";

import { SkillsContainer } from "./Skills.styles";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <SkillsContainer>
      {skills.map((skill) => {
        return <SkillsCard key={skill.id} skill={skill} />;
      })}
    </SkillsContainer>
  );
};

export default Skills;
