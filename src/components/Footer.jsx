import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} - Coded by Andressa Tanaka
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
