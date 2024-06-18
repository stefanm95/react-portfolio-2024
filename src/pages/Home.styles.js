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
  color: #808080; /* Set default text color to grey */
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
  border: 1px solid rgba(255, 255, 255, 0.2);
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
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      --webkit-transform: translateY(0);
      opacity: 1;
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
  position: absolute;
  right: 200px; /* Adjust as needed to position correctly */
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
  animation: 1s ease-in 0s 1 slideInFromRight;
  svg {
    width: 32px;
    height: 32px;
    background-color: transparent;
  }
 
 
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HorizontalLine = styled.hr`
  /* width: 100%; */
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
  unicode-bidi: isolate;
  background-color: #fff;
  opacity: 0.25;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SecondContainer = styled.div`
  max-width: 1200px; /* Adjust the maximum width */
  margin: 0 auto; /* Center the container horizontally */
  height: auto; /* Adjust the height */
  display: flex;
  align-items: space-between;
  flex-direction: column;
  justify-content: center;
  margin-bottom: auto;
`;

export const SecondContainerText = styled.div`
  margin-top: 20px; /* Adjust the margin */
  font-size: 24px; /* Adjust the font size */
  line-height: 1.5; /* Adjust the line height */
  padding: 20px;
  letter-spacing: 0.03rem;
  text-align: start; /* Center align text */
  color: #dedede;
  position: relative;
  overflow: hidden;
  word-wrap: break-word;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ScBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; 
  justify-content: center; 
  margin-top: 20px;
`;

export const ScImage = styled.img`
  width: 390px; /* Adjust the width */
  height: 390px; /* Adjust the height */
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  bottom: 20px;
  left: 10px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    display: none;
  }
`;

export const Boxes = styled.div`
  display: flex;
  height: auto;
  padding: 5px 20px;
  width: auto;
  justify-content: space-around;
  top: 80px;
  margin: 0;
  position: relative;
  border: 1px solid rgba(72, 78, 83, 0.8);
  background-color: transparent;
  @media screen and (max-width: 768px) {
    
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; 
  margin: 0;
  text-align: center;
  letter-spacing: 0.05rem;
  position: relative;
  overflow: hidden;
  
  &.animate {
    animation: 1s ease-in showup; // Add animation property
  }
  @keyframes showup {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
 
`;

export const BoxText = styled.div`
  color: #dedede; /* Adjust color for main text */
  font-size: 20px;
  margin-left: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: transparent;
`;

export const BoxGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const BoxSubText = styled.div`
  margin-top: 5px; /* Adjust spacing */
  color: #50535f; /* Adjust color for thinner text */
  font-weight: 200;
  font-size: 12px;
  &:nth-child(1) {
    font-size: 24px;
    margin-top: 16px;
    margin-bottom: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;


export const ThirdContainer = styled.div`
  height: auto;
  width: auto;
  margin: 0 auto; /* Adjust the font size */
  line-height: 0.5; /* Adjust the line height */
  padding: 20px;
  letter-spacing: 0.03rem;
  text-align: start; /* Center align text */
  color: #dedede;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: auto;
  position: relative;
  top: 140px;
`;

export const ThirdContainertexts = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 32px;
  
`;

export const ThirdContainerText = styled.div`
  max-width: 70%;
  font-size: 32px;
  line-height: 1; /* Adjust line height for better spacing */
  text-align: start; /* Center align text */
  color: #dedede; /* Set default text color to grey */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
  p {
    margin-top: -8px;
    line-height: 1.6;
  }
`;

export const FourthContainer = styled.div`
  margin: 0 auto; /* Adjust the font size */
  line-height: 0.5; /* Adjust the line height */
  padding: 20px;
  letter-spacing: 0.03rem;
  text-align: start; /* Center align text */
  height: auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1200px;
  margin-top: 30px;
`;

export const PlanningSvg = styled.div`
  width: auto;
  height: auto;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const ScrollUp = styled.button`
  position: relative;
  left: 100px;
  bottom: 30px;
  background-color: transparent;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  animation: 1s ease-in 0s 1 slideInFromRight;
  svg {
    width: 32px;
    height: 32px;
    background-color: transparent;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
