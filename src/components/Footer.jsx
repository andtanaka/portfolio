import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="pt-5 pb-3">
      <hr />
      <p className="text-center">
        &copy; {new Date().getFullYear()} - Coded by Andressa Tanaka
      </p>
    </Container>
  );
};

export default Footer;
