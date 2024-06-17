// Navbar.js
import React from "react";
import {
  SocialsContainer,
  Title,
  SocialLink,
  SocialLinksContainer,
} from "./Socials.styles";

import { ReactComponent as Facebook } from "../assets/images/Group 483258.svg";
import { ReactComponent as Twitter } from "../assets/images/Group 483254.svg";
import { ReactComponent as Instagram } from "../assets/images/Group 483257.svg";
import { ReactComponent as LinkedIn } from "../assets/images/Group 483256.svg";

const Socials = () => {
  return (
    <SocialsContainer>
      <Title >About Me</Title>
      <SocialLinksContainer>
        <SocialLink href="https://www.facebook.com">
          <Facebook />
        </SocialLink>
        <SocialLink href="https://twitter.com">
          <Twitter />
        </SocialLink>
        <SocialLink href="https://www.instagram.com">
          <Instagram />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com">
          <LinkedIn />
        </SocialLink>
      </SocialLinksContainer>
    </SocialsContainer>
  );
};

export default Socials;
