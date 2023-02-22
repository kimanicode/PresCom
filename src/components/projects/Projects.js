import React from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const projectsData = [
  {
    id: 1,
    location: `GTC Complex , Nairobi`,
    title: 'CCTV and WIFI Installation',
    description: 'Supply, Install, Test and Commission',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/01/01/59/concrete-2562781_960_720.jpg',
  },
  {
    id: 2,
    location: 'GTC Complex , Nairobi',
    title: 'LAN and WAN',
    description: 'Design ,supply , install, test and commission .',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/05/12/12/33/building-3393191__340.jpg',
  },
  {
    id: 3,
    location: 'Phoenix Aviation , Nairobi',
    title: 'LAN,WIFI and IP Telephony',
    description: 'Support ,Service and Maintenance.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/04/17/01/31/london-726443_960_720.jpg',
  },
  {
    id: 4,
    title: 'Maintenance',
    location : 'St. Andrews college of Theology and Development, Kirinyaga',
    description: 'Maintenance of computers, Printers,servers, scanners, Projectors and other ICT equipment',
    imageUrl: 'https://cdn.pixabay.com/photo/2021/02/09/17/09/mantenimiento-5999189__340.jpg',
  },
  {
    id: 5,
    location: 'St. Mary’s School, Nairobi',
    title: 'Supply of servers',
    description: 'Supply, Install, Test and Commission.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/03/20/21/00/server-2160321__340.jpg',
  },
  {
    id: 6,
    location: 'Kiambu County Offices',
    title: 'WIFI Installation',
    description: 'Supply, Install, Test and Commissioning',
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
            <ProjectTitle>
              {project.title}
            </ProjectTitle>
            <ProjectLocation><LocationOnIcon  />
              {project.location}
            </ProjectLocation>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const ProjectsHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color:#0077cc
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
  color: #0077cc;
`;
const ProjectLocation = styled.h2`
  font-size: 1rem;
  margin: 1rem;
  color: #E98A15;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  margin: 1rem;
  
`;

export default Projects;
