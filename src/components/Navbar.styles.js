import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  overflow-x: hidden;
  overflow-y: hidden;
  position: sticky;
  top: 0; 
  z-index: 1;  
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  padding: 20px 20px;
  color: #dedede;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  position: relative;
  left: 20%;
  display: flex;
  align-items: baseline;
  &:hover {
    cursor: default;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Subtitle = styled.p`
  color: #a25050;
  margin-top: 5px;
  margin-left: 5%;
  &:hover {
    cursor: default;
  }
  @media screen and (max-width: 768px) {
    margin-top: 2px;
    margin-left: 2%;
    font-size: 0.8em;
  }
`;

export const HamburgerButton = styled.button`
  background: var(--primary-color);
  border: none;
  cursor: pointer;
  color: black;
  position: relative;
  right: 80px;
  @media screen and (max-width: 768px) {
    right: 10%;
    padding: 10px;
  }

  svg {
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
      width: 25px;
      height: 25px;
      
    }
  }
`;

export const MenuContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Display menu when isOpen is true */
  flex-direction: row;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  top: 20%; 
  right: 180px; 
  padding: 10px; 
  @media screen and (max-width: 768px) {
    flex-direction: column;
    right: 30%;
    position: fixed;
    top: 2%;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
