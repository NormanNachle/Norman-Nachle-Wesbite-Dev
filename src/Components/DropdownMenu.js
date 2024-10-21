import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropbtn = styled.div`
  margin: 0 1rem;
  cursor: pointer;
  color: white;

  &:hover {
    color: green;
  }
`;


const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 160px;
  z-index: 1;

  a {
    color: black;
    padding: 0.5rem;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #ddd;
      color: green;
    }
  }
`;

const DropdownMenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Dropbtn>{title}</Dropbtn>
      <DropdownContent isOpen={isOpen}>{children}</DropdownContent>
    </Dropdown>
  );
};

export default DropdownMenu;