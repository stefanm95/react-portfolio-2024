import styled from "styled-components";

export const TooltipCardContainer = styled.div`
  padding: 10px;
  margin: 0;
  background-color: #dedede;
  /* border: 1px solid rgb(121, 121, 121, 0.2); */
  border-radius: 4px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  max-width: 250px;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: flex-start;
  font-family: "Urbanist";
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  background-color: #dedede;
  color: #555;
  line-height: 0.8;
`;

export const Description = styled.p`
  margin: 5px 0;
  line-height: 1.2;
  letter-spacing: 0.06em;
  font-size: 14px;
  color: #555;
  background-color: #dedede;
  position: relative;
  top: 10px;
`;

export const Technologies = styled.ul`
  margin: 0;
  background-color: #dedede;
  padding: 0;
  list-style: none;
  inline-size: 1.25em;
  block-size: 1.25em;
  line-height: 1.2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  position: relative;
  top: 20px;
  font-family: "Urbanist";
`;  

export const Technology = styled.li`
  margin: 0 0 5px;
  padding: 4px 8px;
  background-color: #dedede;
  border-radius: 4px;
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
`;