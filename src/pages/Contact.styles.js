import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Container = styled.div`
  max-width: 1200px; /* Set a max-width to constrain the container */
  width: 100%; /* Ensure container takes full width within its max-width */
  margin: 0 auto; /* Center the container */
  padding: 20px;
  background-color: transparent;
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: space-around; /* Space between the two sections */
  position: relative;
  top: 50px;
  animation: 1s ease-in 0s 1 opacityControl;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    /* top: 20px; */
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: relative;
    top: 20px;
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  /* Positioning */
  z-index: 9999;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 320px; /* Adjust width as needed */

  /* Toast style */
  .Toastify__toast {
    /* Background and text color */
    background-color: black;
    color: #dedede;
    border-radius: 4px;
    padding: 12px;
    /* margin-bottom: 10px; */
    
    /* Font */
    font-family: 'Arial', sans-serif;
    font-size: 14px;

    /* Box shadow */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  .Toastify__close-button {
    color: black;
    background-color: black;
  }
  .Toastify__close-button > svg {
    fill: white;
  }
  /* Success toast */
  .Toastify__toast--success {
    background-color: black;
  }

  /* Error toast */
  .Toastify__toast--error {
    background-color: black;
  }

  /* Toast body */
  .Toastify__toast-body {
    padding: 8px;
    background-color: black;
  }
`;

export const Details = styled.div`
  background-color: transparent;
  text-align: left;
  color: #dedede;
  letter-spacing: 0.03rem;
  animation: 1s ease-in 0s 1 slideInFromLeft;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 45%; /* Set a max-width to control the width of the details section */
  @keyframes opacityControl {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  h3 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  p {
    color: #797979;
    margin: 4px 0; /* Adjust the margin to control spacing between <p> elements */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 100%; /* Make details section full width on small screens */
  }
`;

export const PersonalImg = styled.img`
  width: auto;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 16px; /* Add margin bottom for spacing */
`;

export const ContactForm = styled.form`
  font-size: 16px;
  color: #dedede;
  letter-spacing: 0.03rem;
  display: flex;
  flex-direction: column;
  max-width: 45%; /* Set a max-width to control the width of the form */
  width: 100%; /* Ensure form takes full width within its max-width */
  animation: 1s ease-in 0s 1 slideInFromAbove;
  position: relative;
  top: 30px;
  @keyframes slideInFromAbove {
    0% {
      transform: translateY(-100%);
      --webkit-transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      --webkit-transform: translateY(0);
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    /* font-size: 32px; */
    max-width: 100%; /* Make form section full width on small screens */
    /* position: relative;
    top: 20px;
    bottom: 50px; */
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; /* Ensure form group takes full width */
`;

export const Label = styled.label`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  background-color: #dedede;
  width: 100%; /* Set width to 100% to make the input fields longer */
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #444;
  color: #dedede;

  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: none;
    border-color: #a25050;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #444;
  color: #dedede;
  width: 100%; /* Set width to 100% to make the text area longer */
  margin-bottom: 8px;

  &:focus {
    outline: none;
    border-color: #a25050;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #a25050;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #883d3d;
  }
`;
