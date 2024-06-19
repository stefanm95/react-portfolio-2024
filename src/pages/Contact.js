import React from "react";
import emailjs from "emailjs-com";

import { toast } from "react-toastify";

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
  StyledToastContainer
} from "./Contact.styles";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import personalImg from "../assets/images/final.png";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmmit = (event) => {
    event.preventDefault()
    console.log(formData);
    // toast.configure();
    emailjs.send(
      "service_ze52d9k",       // Service ID
      "template_vhk6553",      // Template ID
      formData,                // Template parameters
      "rxKQiI99WPIVy5BnN"           // User ID
    ).then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      console.error("FAILED...", error);
      toast.error("Failed to send message, please try again.");
    });
  }

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
        <ContactForm onSubmit={handleSubmmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
          <StyledToastContainer />
        </ContactForm>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Contact;
