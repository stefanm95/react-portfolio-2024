import styled from "styled-components";

export const Container = styled.div`
  max-width: auto;
  min-width: auto;
  margin: 0 grid-auto-flow;
  padding: 20px;
  background-color: var() (--primary-color);
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BigText = styled.div`
  margin-top: 8px;
  font-size: 56px;
  line-height: 1.2; /* Adjust line height for better spacing */
  text-align: center; /* Center align text */
  color: #dedede; /* Set default text color to grey */
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.span`
  color: ${({ lastWordColor }) => lastWordColor}; /* Set color dynamically */
  margin-right: 16px; /* Add space between words */
  &:nth-child(1) {
    animation: 1s ease-in 0s 1 slideInFromLeft;
  }
  &:nth-child(2) {
    animation: 1s ease-in 0s 1 slideInFromRight;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  position: relative;
  top: 40px;
  gap: 2px;
  font-family: "Urbanist";
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 4px;
  color: #dedede;
  font-size: 16px;
  padding: 10px 20px;
  letter-spacing: 0.05rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  animation: 1s ease-in 0s 1 slideInFromBelow;
  svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-bottom: 2px;
    background-color: transparent;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:nth-child(1) {
    top: 30;
  }
  @keyframes slideInFromBelow {
    0% {
      transform: translateY(100%);
      --webkit-transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
      --webkit-transform: translateY(0);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ScrollDown = styled.button`
  position: relative;
  top: 50px;
  bottom: 120px; /* Adjust as needed to position correctly */
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 15px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  animation: 1s ease-in 0s 1 slideInFromBelow;
  svg {
    width: 32px;
    height: 32px;
    background-color: transparent;
  }
  
  @keyframes slideInFromBelow {
    0% {
      transform: translateY(100%);
      --webkit-transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      --webkit-transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const HorizontalLine = styled.hr`
  color: #484e53;
  border: none;
  border-top: 1px solid #eee;
  box-sizing: content-box;
  height: 0.1px;
  overflow: visible;
  position: relative;
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  background-color: #fff;
  opacity: 0.25;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: auto;
  justify-content: center;
  position: relative;
  top: 56px;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

