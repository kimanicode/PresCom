import styled from "styled-components";

const ContactUs = () => {
  return (
    <Container>
      <Form>
        <FormTitle>Contact Us</FormTitle>
        <FormField>
          <Label>Name</Label>
          <Input type="text" />
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input type="email" />
        </FormField>
        <FormField>
          <Label>Message</Label>
          <TextArea></TextArea>
        </FormField>
        <SubmitButton>Submit</SubmitButton>
      </Form>
      <ContactInfo>
        <ContactInfoTitle>Contact Information</ContactInfoTitle>
        <p>
          <strong>Address:</strong> 123 Main St. Anytown, USA 12345
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@prescom.com
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
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: none;
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

const ContactInfo = styled.div`
  width: 40%;
  max-width: 400px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export default ContactUs;
