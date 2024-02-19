import './NavIcons.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const icons = [
  {
    description: 'Github',
    to: '/',
    figure: <FaGithub />,
  },
  {
    description: 'Linkedin',
    to: '/',
    figure: <FaLinkedin />,
  },
  {
    description: 'Email',
    to: '/',
    figure: <MdEmail />,
  },
];

const NavIcons = () => {
  return (
    <div>
      <Nav className="m-auto">
        {icons.map((icon) => {
          return (
            <NavItem
              className="icon-item"
              key={icon.description}
              as={Link}
              to={icon.to}
            >
              {icon.figure}
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

export default NavIcons;
