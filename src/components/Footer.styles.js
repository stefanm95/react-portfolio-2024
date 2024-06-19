import styled from "styled-components";

export const PromoContainer = styled.div`
/* margin: 0 auto; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  width: 100%;
  background-color: transparent;
  flex-shrink: 1;
  overflow-x: hidden;
  min-height: 30vh;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  position: relative;
  /* left: 24vh; */
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 16px;
  /* width: 100%; */
  /* flex-shrink: 4; */
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    left: 0;
    top: 10px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    left: 0;
    top: 10px;
  }
`;

export const EmailButton = styled.button`
  background-color: transparent;
  border: 1px solid rgb(121, 121, 121, 0.8);
  color: #dedede;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Urbanist";
  font-size: 16px;
  text-decoration: none;
  height: 6vh;
`;

export const UpworkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #008000;
  border: none;
  color: #dedede;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Urbanist";
  font-size: 16px;
  position: relative;
  top: 5px;
  height: 6vh;
  text-decoration: none;
  /* border: 1px solid rgb(121, 121, 121, 0.8); */
`;

export const FooterContainer = styled.footer`
  position: relative; /* Ensure relative positioning for the footer container */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 16px;
  top: 50px;
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
  margin: 0 auto;
`;

export const FooterLink = styled.a`
  margin-left: 10px;
  text-decoration: none;
`;
