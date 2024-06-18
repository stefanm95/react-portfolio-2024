import React, { useEffect } from "react";

import Navbar from "../components/Navbar";

import {
  Container,
  BigText,
  Text,
  ScrollDown,
  HorizontalLine,
  Step,
  Steps,
  StepText,
  StepBigText,
  ContentContainer,
  Description,
  StepContainer,
} from "./Process.styles";

import { ReactComponent as ScrollDownSvg } from "../assets/images/Group 483313.svg";
import { Footer } from "../components/Footer";

import {observeElements, handleScrollDown} from "../utils/index.js";


const Process = () => {
  useEffect(() => {
    observeElements(".boxAnimation", "animate");
  }, []);
  return (
    <>
      <Navbar />
      <Container id="section--1">
        <BigText>Working Process</BigText>
        <Text>
          How I combine my skills and experience to create robust solutions for
          my clients.
        </Text>
        <ScrollDown onClick={handleScrollDown}>
          <ScrollDownSvg />
        </ScrollDown>
      </Container>
      <HorizontalLine />
      <br />
      <ContentContainer id="section--2">
        <Steps>
          <Step className="boxAnimation">
            <StepContainer>
              <StepText>Step 01</StepText>
              <StepBigText>Requirement Analysis</StepBigText>
            </StepContainer>
            <Description>
              Before diving into development, it's crucial to thoroughly
              understand the project's objectives, client requirements, and
              target audience needs. This phase involves conducting
              comprehensive research, gathering user stories, and defining
              project scope. By collaborating closely with stakeholders, we
              ensure alignment on project goals and establish a clear roadmap
              for success. The outcome of this analysis is a detailed project
              plan outlining the scope of work, project timeline, budget
              considerations, and required resources. By laying a strong
              foundation during this phase, we set the stage for effective
              project management and successful delivery.
            </Description>
          </Step>
          <Step className="boxAnimation">
            <StepContainer>
              <StepText>Step 02</StepText>
              <StepBigText>Design</StepBigText>
            </StepContainer>
            <Description>
              Design is more than just aesthetics; it's about creating an
              intuitive and engaging user experience that resonates with the
              target audience. In this phase, we translate project requirements
              and user insights into visual concepts, wireframes, and
              interactive prototypes. Collaborating closely with UI/UX
              designers, we focus on creating a cohesive design language that
              reflects the brand identity and guides users seamlessly through
              the website. By incorporating best practices in usability and
              accessibility, we ensure that the design not only looks stunning
              but also functions flawlessly across different devices and screen
              sizes.
            </Description>
          </Step>
          <Step className="boxAnimation">
            <StepContainer>
              <StepText>Step 03</StepText>
              <StepBigText>Development</StepBigText>
            </StepContainer>

            <Description>
              Armed with a solid design foundation, we embark on the development
              phase where we bring concepts to life through clean, efficient
              code. Using industry-leading technologies and frameworks such as
              HTML, CSS, JavaScript, React, and Node.js, we build responsive,
              scalable, and feature-rich web applications. Our development
              process prioritizes modularization, code reusability, and
              performance optimization to deliver a robust and maintainable
              codebase. By following coding standards and best practices, we
              ensure compatibility across various browsers and devices,
              providing a seamless user experience for all users.
            </Description>
          </Step>
          <Step className="boxAnimation">
            <StepContainer>
              <StepText>Step 04</StepText>
              <StepBigText>API Integration</StepBigText>
            </StepContainer>

            <Description>
              Modern web applications often rely on APIs to connect frontend
              interfaces with backend systems and third-party services. In this
              phase, we develop and integrate RESTful APIs to facilitate data
              exchange between different components of the application. Whether
              it's fetching data from a database, processing user inputs, or
              interacting with external services, our APIs are designed to be
              secure, efficient, and scalable. We implement authentication
              mechanisms, data validation, and error handling to ensure the
              integrity and reliability of the API endpoints. By adhering to
              REST principles and industry standards, we enable seamless
              communication between frontend and backend systems, empowering the
              application with rich functionality and real-time data updates.
            </Description>
          </Step>
          <Step className="boxAnimation">
            <StepContainer>
              <StepText>Step 05</StepText>
              <StepBigText>Testing</StepBigText>
            </StepContainer>

            <Description>
              Quality assurance is a critical aspect of the development process,
              ensuring that the application meets high standards of performance,
              functionality, and reliability. In this phase, we employ a variety
              of testing methodologies, including unit testing, integration
              testing, and user acceptance testing. Our rigorous testing process
              identifies and addresses bugs, usability issues, and edge cases,
              ensuring a smooth and error-free user experience. By leveraging
              automated testing tools and manual testing techniques, we validate
              the application's behavior across different environments and usage
              scenarios. Through continuous testing and debugging iterations, we
              strive to deliver a polished and stable product that exceeds
              client expectations.
            </Description>
          </Step>
          <Step className="boxAnimation">
            <StepContainer>
              <StepText>Step 06</StepText>
              <StepBigText>Deployment</StepBigText>
            </StepContainer>

            <Description>
              Launching a web application is just the beginning; ongoing
              maintenance and support are essential for long-term success. In
              this phase, we deploy the application to production servers,
              configure hosting environments, and ensure smooth deployment
              processes. Post-deployment, we monitor application performance,
              track user analytics, and address any issues that arise. Our
              maintenance services include regular updates, security patches,
              and feature enhancements to keep the application running smoothly
              and securely. By staying proactive and responsive to client needs,
              we ensure that the application evolves with changing requirements
              and remains competitive in the ever-changing digital landscape.
            </Description>
          </Step>
        </Steps>
      </ContentContainer>
      <Footer />
    </>
  );
};

export default Process;
