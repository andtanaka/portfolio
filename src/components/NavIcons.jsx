import './NavIcons.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const icons = [
  {
    description: 'Github',
    to: 'https://github.com/andtanaka',
    figure: <FaGithub />,
  },
  {
    description: 'Linkedin',
    to: 'https://www.linkedin.com/in/andressa-tanaka-4b39a185',
    figure: <FaLinkedin />,
  },
  {
    description: 'Email',
    to: 'mailto:andressamtanaka@gmail.com',
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
              as="a"
              href={icon.to}
              target="_blank"
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
