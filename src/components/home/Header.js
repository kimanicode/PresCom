import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { bubble as Menu } from 'react-burger-menu'
import './menu.css'
import Logo from './pcom.png';

const Header = () => {
  

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src={Logo} alt="Prescom" />
        <Info>PresCom</Info>
      </LogoContainer>
      
      <NavContainer >
        
        <NavList>
          <NavItem>
            <NavLink><Link to="Banner" smooth={true} duration={500}>Home</Link>
          </NavLink>
          
          </NavItem>
          <NavItem>
            <NavLink><Link to="Projects" smooth={true} duration={500}>Projects</Link></NavLink>
          
          </NavItem>
          
          
          <NavItem>
            <NavLink ><Link to="Services" smooth={true} duration={500}>Services</Link></NavLink>
          </NavItem>

          <NavItem>
            <NavLink><Link to="About" smooth={true} duration={500}>About</Link></NavLink>
          
          </NavItem>
          <NavItem>
            <NavLink ><Link to="Contact" smooth={true} duration={500}>Contact Us</Link></NavLink>
          </NavItem>
        </NavList>
       
      </NavContainer>
      <Menu right>

      
        
        <NavList>
          <NavItem>
            <NavLink><Link to="Banner" smooth={true} duration={500}>Home</Link>
          </NavLink>
          
          </NavItem>
          <NavItem>
            <NavLink><Link to="Projects" smooth={true} duration={500}>Projects</Link></NavLink>
          
          </NavItem>
          
          
          <NavItem>
            <NavLink ><Link to="Services" smooth={true} duration={500}>Services</Link></NavLink>
          </NavItem>

          <NavItem>
            <NavLink><Link to="About" smooth={true} duration={500}>About</Link></NavLink>
          
          </NavItem>
          <NavItem>
            <NavLink ><Link to="Contact" smooth={true} duration={500}>Contact Us</Link></NavLink>
          </NavItem>
        </NavList>
       
      
      </Menu>
     
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #50B2C0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;  
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 50px;
  border-radius:50%;
  @media screen and (max-width: 768px) {
    display:none;
  }
`;
const Info = styled.span`
  padding: 4px;
  color:#fff08f;
  font-size : 24px;
  


`;

const NavContainer = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #50B2C0;
  display: none;
  
 

`;

const NavList = styled.ul`
  list-style: none;
  display:flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0.5rem;
`;

const NavLink = styled.a`
  display: block;
  color:white;
  font-weight:bold;
  font-size: 18px;
  text-decoration: none;
  &:hover{
    color: #E98A15;
  }
  cursor:pointer;
`;



export default Header;