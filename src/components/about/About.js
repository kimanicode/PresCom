import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>About Us</AboutHeader>
      <AboutSection>
        <AboutSectionTitle>Our Mission</AboutSectionTitle>
        <AboutSectionText>
          At Prescom, our mission is to the be the nation’s leader and sought after professional agent
          of ICT equipment in whatever form and           substance, to serve the various needs of          the
          growing industry, utilizing state-of          –the-art, 21st century technology.          Providing efficient
          professional equipment and services as          well as technical support to ensure fast          and
          effective response to the industry          requirements in meeting their needs, and          maintain a
          growing pool of highly trained,           professional and well experienced           employees, providing
          them with challenge, up to date training, career growth and better emoluments.
        </AboutSectionText>
      </AboutSection>
      <AboutSection>
        <AboutSectionTitle>Our History</AboutSectionTitle>
        <AboutSectionText>
          Prescom was founded in 2012 with the goal of providing cutting-edge networks and telecommunications solutions to businesses
          across the country. Over the years, we have expanded our product line and service offerings to meet the
          changing needs of our customers. Today, we are proud to be one of the leading telecom companies in the industry.
        </AboutSectionText>
      </AboutSection>
      <AboutSection>
        <AboutSectionTitle>Our Team</AboutSectionTitle>
        <AboutSectionText>
          Our team consists of experienced professionals who are dedicated to providing the best possible service to our
          customers. From our sales representatives to our technical support team, each member of the Prescom team plays
          a vital role in helping us achieve our mission.
        </AboutSectionText>
      </AboutSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const AboutHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color:#0077cc
`;

const AboutSection = styled.div`
  margin-bottom: 2rem;
`;

const AboutSectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #E98A15;
`;

const AboutSectionText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

export default About;
