import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  position: sticky;
  top: 0; 
  z-index: 1;  
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  padding: 20px 20px;
  /* background-color: transparent; */
  color: #dedede;
`;

export const Title = styled.h1`
  margin: 0 0 0 80px;
  display: flex;
  align-items: baseline;
  /* background-color: transparent; */
  &:hover {
    cursor: default;
  }
`;

export const Subtitle = styled.p`
  color: #a25050;
  margin-top: 5px;
  margin-left: 5%;
  /* background-color: transparent; */
  &:hover {
    cursor: default;
  }
`;

export const HamburgerButton = styled.button`
  background: var(--primary-color);
  border: none;
  cursor: pointer;
  color: black;
  margin-right: 80px;
  /* background-color: transparent; */
`;

export const MenuContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Display menu when isOpen is true */
  flex-direction: row;
  position: absolute;
  top: 20%; 
  right: 180px; 
  padding: 10px; 

`;

export const MenuItem = styled(Link)`
  padding: 8px;
  color: #dedede;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  font-family: "NordiquePro-Regular", "Urbanist", sans-serif;
  &:hover {
    background-color: #333;
  }
`;
