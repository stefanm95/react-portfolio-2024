import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative; /* Ensure relative positioning for the footer container */
  display: flex;
  justify-content: space-between;
  height: auto;
  padding: 16px;
  /* color: var(--text-color-secondary); */
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  background-color: transparent; /* Background color to differentiate from the main content */
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-size: 16px;
  color: #797979;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
`;

export const FooterLink = styled.a`
  margin-left: 20px;
  margin-top: 4px;
  text-decoration: none;
`;
