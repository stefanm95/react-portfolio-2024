import React from "react";

import {
  FooterContainer,
  Title,
  FooterLinksContainer,
  FooterLink,
  PromoContainer,
  ContactInfo,
  EmailButton,
  UpworkButton,
} from "./Footer.styles";

import { ReactComponent as Upwork } from "../assets/images/upwork-emblem-vector-37696674.svg";
import { ReactComponent as Facebook } from "../assets/images/Group 483258.svg";
import { ReactComponent as Twitter } from "../assets/images/Group 483254.svg";
import { ReactComponent as Instagram } from "../assets/images/Group 483257.svg";
import { ReactComponent as LinkedIn } from "../assets/images/Group 483256.svg";
import { BigText } from "../pages/Portfolio.styles";

export const Footer = () => {
 
  const handleRedirect = () => {
    window.location.href = "https://www.upwork.com/freelancers/~01d5ca1470bd14b222";
  };


  return (
    <>
      <PromoContainer>
        <BigText>Let's Work Togheter -</BigText>
        <ContactInfo>
          <EmailButton>stefan.moise95@icloud.com</EmailButton>
            <UpworkButton onClick={handleRedirect}>
              <Upwork />
              Hire me on Upwork
            </UpworkButton>
          
        </ContactInfo>
      </PromoContainer>
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
    </>
  );
};
