// src/Footer.js
import React from 'react';
import '../css/Footer.css'; // Import CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <div>Contact us at: <a href="mailto:normannachle@gmail.com">normannachle@gmail.com</a></div>
            <a href="https://www.instagram.com/normannachle/?hl=en">Instagram</a>
            <a href="https://www.tiktok.com/@normannachle">TikTok</a>
                <a href="mailto:your-email@example.com">Email Us</a>
            </div>
        </footer>
    );
};

export default Footer;

/*
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
*/
