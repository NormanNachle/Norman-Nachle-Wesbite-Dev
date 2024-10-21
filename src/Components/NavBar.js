import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const Nav = styled.nav`
  position: fixed; /* Fixes the navbar at the top */
  top: 0; /* Ensure the navbar stays at the top */
  width: 100%; /* Full width */
  background: rgba(0, 80, 95, 0.7); /* Translucent color */
  padding: 1.5rem; /* Increased vertical padding for a taller navbar */
  display: flex;
  align-items: center;
  z-index: 1000; /* Ensures navbar is above other elements */
`;

const Logo = styled.div`
  font-family: 'Hatton', sans-serif; /* Use Hatton font */
  color: white; /* Change color for better contrast */
  font-size: 1.8rem; /* Slightly larger font size for the logo */
  font-weight: bold;
  margin-right: auto;
`;

const NavLink = styled(Link)`
  margin: 0 2rem; /* Increased horizontal margin for more space between links */
  color: white; /* Change color for better contrast */
  text-decoration: none;
  font-size: 1.2rem; /* Adjust font size for better readability */

  &:hover {
    color: lightgreen; /* Change hover color as needed */
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo>Norman Nachle</Logo>
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
