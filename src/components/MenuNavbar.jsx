import './MenuNavbar.scss';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MenuNavbar = () => {
  return (
    <Container className="p-0 m-auto">
      <Row className="m-0">
        <Navbar expand="sm">
          <Container>
            <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-center">
              <div className="navbar-header">
                <Nav>
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/posts">
                    Blog
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};

export default MenuNavbar;

{
}
