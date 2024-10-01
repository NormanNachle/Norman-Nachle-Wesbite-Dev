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
      <NavLink to="/services">Our Services</NavLink>
      <NavLink to="/testimonials">Testimonials</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <DropdownMenu title="Dropdown">
        {/* Add submenu items here */}
        <NavLink to="/submenu1">Submenu 1</NavLink>
        <NavLink to="/submenu2">Submenu 2</NavLink>
      </DropdownMenu>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};
export default NavBar