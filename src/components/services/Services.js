import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
background-color:#253031;
margin-top:10px;
`;

const ServiceHeader = styled.h1`
   text-align:center;
   color:#253031;


`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  background-color:#fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.25rem);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const ServiceName = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color:#0077cc;
`;

const ServiceDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
`;

const services = [
  {
    name: 'Network Security',
    description: 'We offer network security solutions such as firewalls, intrusion detection systems, and anti-virus protection to protect customers networks from security threat',
    image: 'https://cdn.pixabay.com/photo/2023/01/26/13/12/security-7745890__340.jpg',
  },
  {
    name: 'Network Consulting',
    description: 'Prescom  offers network consulting services to help businesses design, implement, and optimize their networks to maximize performance and efficiency',
    image: 'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475663__340.jpg',
  },
  {
    name: 'Internet Services',
    description: 'We offer various types of internet services, including DSL, cable, fiber optic, and wireless. These services could range from home internet packages to business-level internet solutions',
    image: 'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475659__340.jpg',
  },
  
  // Add more service objects here...
];

const Services = () => {
  return (
    <div>
    <ServiceHeader >Our Services</ServiceHeader>
    <ServicesWrapper>
      {services.map((service) => (
        <ServiceCard key={service.name}>
          <ServiceImage src={service.image} alt={service.name} />
          <ServiceName>{service.name}</ServiceName>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </ServicesWrapper>
    </div>
  );
};

export default Services;
