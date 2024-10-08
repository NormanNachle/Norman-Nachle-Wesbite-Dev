// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: white;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
`;

const SocialMediaLinks = styled.div`
  margin-top: 0.5rem;

  a {
    margin: 0 0.5rem;
    color: black;
    text-decoration: none;

    &:hover {
      color: green;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <div>Contact us at: <a href="mailto:normannachle@gmail.com">normannachle@gmail.com</a></div>
        <div><a></a></div>
        <a href="https://www.instagram.com/normannachle/?hl=en">Instagram</a>
        <a href="https://www.tiktok.com/@normannachle">TikTok</a>
      </SocialMediaLinks>
    </FooterContainer>
  );
};

export default Footer;
