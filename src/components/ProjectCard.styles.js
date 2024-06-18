import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  margin: 0 20px 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  &.animate{
    animation: 1s ease-in showup; // Add animation property
  }
`;

export const Image = styled.img`
  max-width: 538px;
  object-fit: cover;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #797979;
  font-size: 14px;
  padding: 10px 10px;
  cursor: pointer;
  transition: background-color 100ms ease;
  font-family: "Urbanist Light", "Poppins", sans-serif;
  letter-spacing: 0.02rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media screen and (max-width: 800px) {
    font-size: 8px;
  }
  @media screen and (max-width: 480px) {
    /* display: none; */
  }
`;
