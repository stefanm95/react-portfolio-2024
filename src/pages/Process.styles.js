import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--primary-color);
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BigText = styled.div`
  margin-top: 8px;
  font-size: 56px;
  text-align: center;
  color: #dedede;
  letter-spacing: 0.03rem;
  animation: 1s ease-in 0s 1 slideInFromLeft;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.span`
  color: #595959;
  font-size: 24px;
  letter-spacing: 0.03rem;
  text-align: center;
  animation: 1s ease-in 0s 1 slideInFromRight;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ScrollDown = styled.button`
  position: relative;
  top: 50px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 15px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: 1s ease-in 0s 1 slideInFromBelow;

  svg {
    width: 40px;
    height: 40px;
    background-color: transparent;
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  min-height: 88vh;
  justify-content: center;
`;

export const Steps = styled.div`
  width: 80%;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #595959;
  border-radius: 8px;
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
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const StepContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* justify-content: space-around; */
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const StepText = styled.p`
  color: #595959;
  margin-bottom: 0;
`;

export const StepBigText = styled.p`
  color: #dedede;
  font-size: 24px;
  letter-spacing: 0.03rem;
  margin-top: 0%;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: #979797;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.03rem;
  margin-top: 16px;
  max-width: 800px;
  text-align: start;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 12px;
  }
`;
