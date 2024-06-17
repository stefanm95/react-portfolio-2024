import React from "react";

import {
  FooterContainer,
  Title,
  FooterLinksContainer,
  FooterLink,
} from "./Footer.styles";

import { ReactComponent as Facebook } from "../assets/images/Group 483258.svg";
import { ReactComponent as Twitter } from "../assets/images/Group 483254.svg";
import { ReactComponent as Instagram } from "../assets/images/Group 483257.svg";
import { ReactComponent as LinkedIn } from "../assets/images/Group 483256.svg";
export const Footer = () => {
  return (
    <FooterContainer>
      <Title>@2024 all rights reserver Stefan Moise</Title>
      <FooterLinksContainer>
        <FooterLink href="https://www.facebook.com">
          <Facebook />
        </FooterLink>
        <FooterLink href="https://twitter.com">
          <Twitter />
        </FooterLink>
        <FooterLink href="https://www.instagram.com">
          <Instagram />
        </FooterLink>
        <FooterLink href="https://www.linkedin.com">
          <LinkedIn />
        </FooterLink>
      </FooterLinksContainer>
    </FooterContainer>
  );
};
