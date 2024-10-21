import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const Nav = styled.nav`
  background: white;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: green;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: black;
  text-decoration: none;

  &:hover {
    color: green;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <DropdownMenu title="Dropdown">
        {/* Add submenu items here */}
        <NavLink to="/dancers">Dancers</NavLink>
        <NavLink to="/judges">Judges</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
        
      </DropdownMenu>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};
export default NavBar