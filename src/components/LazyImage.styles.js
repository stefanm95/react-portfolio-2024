import styled from "styled-components";

export const Image = styled.img`
  max-width: 538px;
  object-fit: cover;
  height: auto;
  @media screen and (max-width: 1400px) {
    max-width: 100%;
  }
`;
