// Navbar.styles.js
import styled from "styled-components";

export const SocialsContainer = styled.nav`
  position: relative; /* Ensure relative positioning for the menu container */
  display: flex;
  justify-content: space-between;
  height: auto;
  /* align-items: flex-end; */
  padding: 16px;
  /* background-color: black; */
  color: var(--text-color-secundary);
`;

export const Title = styled.h3`
  margin: 0 auto;
  font-size: 16px;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
`;

export const SocialLink = styled.a`
  margin-left: 20px;
  margin-top: 4px;
  /* color: #5f5f5f; */
  text-decoration: none;
`;
