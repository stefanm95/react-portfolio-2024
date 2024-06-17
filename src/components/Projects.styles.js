import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: auto;
  /* justify-content: center; */
`;
export const ButtonLink = styled(Link)`
  position: relative;
  top: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background-color: transparent;
  text-decoration: none;
  color: #dedede;
  font-size: 16px;
  padding: 16px 16px;
  /* align-content: center; */
  cursor: pointer;
  transition: background-color 100ms ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
