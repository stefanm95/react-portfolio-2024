import React from "react";
import {
  Container,
  Details,
  ContactForm,
  PersonalImg,
  FormGroup,
  Button,
  Input,
  Label,
  Textarea,
} from "./Contact.styles";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import personalImg from "../assets/images/final.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Details>
          <PersonalImg src={personalImg} alt="Personal Image" />
          <h3>Hi. I am Stefan! I am a full stack developer.</h3>
          <p>Age: 28</p>
          <p>Country - Romania</p>
          <p>Whatsapp - +40723598489</p>
          <p>Email - stefan.moise95@icloud.com</p>
        </Details>
        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="name"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              type="message"
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Send me a message!"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </ContactForm>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
