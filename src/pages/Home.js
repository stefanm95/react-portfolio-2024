import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Projects from "../components/Projects";

import {
  BigText,
  Button,
  Container,
  Text,
  SecondContainer,
  HorizontalLine,
  SecondContainerText,
  ScBox,
  ScImage,
  Boxes,
  Box,
  BoxText,
  BoxSubText,
  BoxGroup,
  ThirdContainer,
  ThirdContainerText,
  FourthContainer,
  ScrollDown,
  ScrollUp,
  ThirdContainertexts,
  PlanningSvg
} from "./Home.styles";

import { ReactComponent as WavingHand } from "../assets/images/wavingHand.svg";
import { ReactComponent as Raiffeisen } from "../assets/images/raifflogosvg.svg";
import { ReactComponent as Fme } from "../assets/images/Fme-Logo.svg";
import { ReactComponent as Upwork } from "../assets/images/upwork-emblem-vector-37696674.svg";
import { ReactComponent as ScrollDownSvg } from "../assets/images/Group 483313.svg";
import { ReactComponent as Planning } from "../assets/images/Group 10881.svg";

import personalImage from "../assets/images/final.png";
import Skills from "../components/Skills";
import { Footer } from "../components/Footer";


const observeElements = (selector, animationClass) => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    observeElements(".boxAnimation", "animate");
  }, []);
  const handleScrollDown = () => {
    const element = document.getElementById("section--2");
    const navbar = document.querySelector('nav'); // Select the navbar
  
    if (!element) {
      console.error("Element with ID 'section--2' not found.");
      return;
    }
  
    if (!navbar) {
      console.error("Navbar element not found.");
      return;
    }
  
    const navbarHeight = navbar.offsetHeight; // Get the navbar height
  
    window.scrollTo({
      top: element.offsetTop - navbarHeight, // Subtract the navbar height from the scroll position
      behavior: "smooth",
    });
  };

  const handleScrollUp = () => {
    const element = document.getElementById("section--1");
    const navbar = document.querySelector('nav');
    console.log("element: ", element);
    
    if (!element) {
      console.error("Element with ID 'section--2' not found.");
      return;
    }
  
    if (!navbar) {
      console.error("Navbar element not found.");
      return;
    }

    const navbarHeight = navbar.offsetHeight; // Get the navbar height
  
    window.scrollTo({
      top: element.offsetTop - navbarHeight, // Subtract the navbar height from the scroll position
      behavior: "smooth",
    });
  };

  const handleRedirect = () => {
    navigate("/contact");
  }

  return (
    <>
      <Navbar />
      <Container id="section--1">
        <BigText>
          <Text>Designing with</Text>
          <Text lastWordColor="white">Purpose,</Text>
        </BigText>
        <BigText>
          <Text>Building with</Text>
          <Text lastWordColor="white">Flow.</Text>
        </BigText>
        <Button onClick={handleRedirect}>
          Say hello
          <WavingHand />
        </Button>
      </Container>
        <ScrollDown onClick={handleScrollDown}>
          <ScrollDownSvg />
        </ScrollDown>
      <HorizontalLine />

      <div id="section--2">
        <SecondContainer id="section--3">
          <Socials />
          <SecondContainerText>
            Hi, I am Stefan! I'm a designer with 3 years of web development
            experience with the past 2 years spent honing my skills in React,
            Typescript. And Node.js. I'm passionate about creating intuitive
            user experiences and innovative designs.
          </SecondContainerText>
          <ScBox>
            <SecondContainerText>
              I understand the importance of a Pixel- perfect Website, pride
              myself on producing high-quality websites, and I'm comfortable
              working solo or as part of a team. In addition to my technical
              skills, I have a strong eye for design aesthetics and a commitment
              to staying updated with the latest industry trends and best
              practices.
            </SecondContainerText>
            <ScImage src={personalImage} alt="personal image"></ScImage>
          </ScBox>
          <Boxes>
            <Box className="boxAnimation">
              <BoxGroup>
                <Raiffeisen />
                <BoxText>raiffeisen</BoxText>
              </BoxGroup>
              <BoxSubText>Web Development</BoxSubText>
            </Box>
            <Box className="boxAnimation">
              <BoxGroup>
                <Fme />
                <BoxText>fme group</BoxText>
              </BoxGroup>
              <BoxSubText>Data Migration</BoxSubText>
            </Box>
            <Box className="boxAnimation">
              <BoxGroup>
                <Upwork />
                <BoxText>freelancing</BoxText>
              </BoxGroup>
              <BoxSubText>Upwork</BoxSubText>
            </Box>
          </Boxes>
        </SecondContainer>
      </div>
      <ThirdContainer id="section--4">
        <ThirdContainertexts>
          <BoxSubText>Featured products</BoxSubText>
          <ThirdContainerText>
            I craft digital solutions that showcase my passion and expertise in
            design and <p>development.</p>
          </ThirdContainerText>
        </ThirdContainertexts>
        <Projects />
      </ThirdContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HorizontalLine />
      <FourthContainer id="section--5">
        <BoxSubText>What do I do and how?</BoxSubText>
        <ThirdContainerText>
          I love to craft functional solutions for unique problems. These are
          some skills I have picked up over my career.
        </ThirdContainerText>
        <Skills />
        <PlanningSvg>
          <Planning />
        </PlanningSvg>
      </FourthContainer>
      <ScrollUp onClick={handleScrollUp}>
        <ScrollDownSvg />
      </ScrollUp>
      <Footer />
    </>
  );
};

export default Home;
