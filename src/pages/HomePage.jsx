import './HomePage.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollSpy from 'react-ui-scrollspy';
import NavIcons from '../components/NavIcons';
import SideMenuNavbar from '../components/SideMenuNavbar';
import AboutTopic from '../components/AboutTopic';
import SkillsAndToolsTopic from '../components/SkillsAndToolsTopic';
import ProjectsTopic from '../components/ProjectsTopic';

const topics = [
  {
    name: 'about',
    label: 'About',
    id: `scrollspy-about`,
  },
  {
    name: 'skillsAndTools',
    label: 'Skills & Tools',
    id: `scrollspy-skillsAndTools`,
  },
  {
    name: 'projects',
    label: 'Projects',
    id: `scrollspy-projects`,
  },
];

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={4} md={3}>
          <div className="fix-container">
            <h1 className="title">Andressa</h1>
            <h1 className="title">Tanaka</h1>
            <NavIcons />
            <div className="d-none d-sm-flex">
              <SideMenuNavbar topics={topics} />
            </div>
          </div>
        </Col>
        <Col xs={12} sm={8} md={9}>
          <ScrollSpy
            scrollThrottle={100}
            useBoxMethod={false}
            activeClass="active-scrollspy"
            className="scrollspy-container"
          >
            <AboutTopic />
            <SkillsAndToolsTopic />

            <ProjectsTopic />
          </ScrollSpy>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
