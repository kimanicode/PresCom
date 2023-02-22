import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Logo from './image1.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src={Logo} alt="Prescom" />
      </LogoContainer>
      <NavContainer open={isMobileMenuOpen}>
        <NavList>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
      <MenuButton open={isMobileMenuOpen} onClick={toggleMobileMenu}>
        <MenuLine className="menu-line-1" />
        <MenuLine className="menu-line-2" />
        <MenuLine className="menu-line-3" />
      </MenuButton>
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
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 50px;
  border-radius:50%;
`;

const NavContainer = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #50B2C0;
  display: none;

  ${({ open }) =>
    open &&
    css`
      display: block;
    `}

  @media screen and (min-width: 768px) {
    position: static;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
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
  color: black;
  font-weight:bold;
  font-size: 18px;
  text-decoration: none;
`;

const MenuButton = styled.button`
  position: relative;
  display: none;
  width: 30px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  ${({ open }) =>
    open &&
    css`
      .menu-line-1 {
        transform: rotate(45deg);
        top: 50%;
      }

      .menu-line-2 {
        opacity: 0;
      }

      .menu-line-3 {
        transform: rotate(-45deg);
        top: 50%;
      }
    `}

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const MenuLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: transform 0.3s ease-out;

`

export default Header;