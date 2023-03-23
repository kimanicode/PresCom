import styled from "styled-components";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData); // Do something with the form data
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    setSuccess(true)
    
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Contact Us</FormTitle>
        <FormField>
          <Label>Name</Label>
          <Input type="text"
           name="name"
          value={formData.name}
          onChange={handleInputChange}
          />

        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
           />
        </FormField>
        <FormField>
          <Label>Message</Label>
          <TextArea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}>
          
          </TextArea>

        </FormField>
        <SubmitButton>Submit</SubmitButton>
        {success && <Success>Message sent successfully </Success>}
      </Form>
      <ContactInfo>
        <ContactInfoTitle>Contact Information</ContactInfoTitle>
        <p>
          <strong><HomeTwoToneIcon/></strong> Kahawa Sukari, Nairobi
        </p>
        <p>
          <strong><LocalPhoneTwoToneIcon/></strong> 0710 300811/0722 614589
        </p>
        <p>
          <strong><EmailTwoToneIcon/></strong> info@prescom.com
        </p>
      </ContactInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem;
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.form`
  width: 50%;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color:#253031;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color:#E98A15;
  font-weight:bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: solid 0.1px;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: solid 0.5px;
  border-radius: 0.25rem;
  font-size: 1rem;
  height: 200px;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005ea3;
  }
`;
const Success = styled.p`
  color: green;
  padding:4px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  width: 40%;
  max-width: 400px;
  display:flex;
  flex-direction: column;
  justify-content:space-betweeen;
  margin-top:12%;

  

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color:#0077cc
`;

export default ContactUs;
