import React from 'react';
import styled from 'styled-components';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, quam vel bibendum volutpat.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/01/01/59/concrete-2562781_960_720.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Nulla elementum pretium mauris, eu semper mauris mattis vitae. Nunc id ullamcorper turpis.',
    imageUrl: 'https://picsum.photos/id/238/300/200',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Etiam rutrum sem ut risus eleifend, at laoreet nibh semper. Fusce eu tincidunt tortor.',
    imageUrl: 'https://picsum.photos/id/239/300/200',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Fusce id justo id ipsum maximus convallis. Morbi bibendum purus nec lectus tempus, in convallis augue pretium.',
    imageUrl: 'https://picsum.photos/id/240/300/200',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Donec at euismod neque. Nulla malesuada pharetra nisi, eu maximus urna commodo ut.',
    imageUrl: 'https://picsum.photos/id/241/300/200',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Aliquam erat volutpat. Vestibulum nec rutrum sapien, at finibus quam.',
    imageUrl: 'https://picsum.photos/id/242/300/200',
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeader>Recent Projects</ProjectsHeader>
      <ProjectsList>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const ProjectsHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  margin: 1rem;
`;

export default Projects;
