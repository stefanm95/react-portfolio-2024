// Navbar.js
import React, { useState } from "react";
import {
  NavContainer,
  Title,
  MenuContainer,
  MenuItem,
  HamburgerButton,
  Subtitle,
} from "./Navbar.styles";

import { ReactComponent as HamburgerIcon } from "../assets/images/burgerList.svg";
import { ReactComponent as CloseIcon } from "../assets/images/closeIcon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <Title>
        Stefan
        <Subtitle>.</Subtitle>
      </Title>
      <HamburgerButton onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </HamburgerButton>
      <MenuContainer isOpen={isOpen}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <MenuItem to="/process">Process</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </MenuContainer>
    </NavContainer>
  );
};

export default Navbar;
