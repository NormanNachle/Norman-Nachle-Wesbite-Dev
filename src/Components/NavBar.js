import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const Nav = styled.nav`
  position: fixed; /* Fixes the navbar at the top */
  width: 100%; /* Full width */
  background: rgba(0, 80, 95, 0.7); /* Translucent color */
  padding: 1rem;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px); /* Optional: adds a blur effect behind the navbar */
  z-index: 1000; /* Ensures navbar is above other elements */
`;

const Logo = styled.div`
  font-family: 'TT Ramillas', sans-serif; /* Use TT Ramillas font */
  color: white; /* Change color for better contrast */
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: white; /* Change color for better contrast */
  text-decoration: none;

  &:hover {
    color: lightgreen; /* Change hover color as needed */
  }
`;

const NavBar = () => {
  return (
    <Nav>
    
      <Logo>Norman Nachle</Logo> {/* Updated to display the logo text */}
    
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <DropdownMenu title="Dropdown">
        <NavLink to="/dancers">Dancers</NavLink>
        <NavLink to="/judges">Judges</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
      </DropdownMenu>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default NavBar;
