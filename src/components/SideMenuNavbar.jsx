import { useLocation } from 'react-router-dom';
import './SideMenuNavbar.scss';
import { Nav, NavLink } from 'react-bootstrap';
import { useEffect } from 'react';

const SideMenuNavbar = ({ topics }) => {
  return (
    <Nav as="ul" className="m-auto" id="scrollspy-sidemenu">
      {topics.map((topic) => {
        return (
          <Nav.Item as="li" key={topic.name}>
            <NavLink
              as="a"
              href={`#${topic.id}`}
              data-to-scrollspy-id={topic.id}
            >
              {topic.label}
            </NavLink>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default SideMenuNavbar;
