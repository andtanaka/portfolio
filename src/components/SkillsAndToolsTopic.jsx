import '../pages/HomePage.scss';
import { Container, Row, Col } from 'react-bootstrap';
import skillsAndTools from '../data/skillsAndTools';

const SkillsAndToolsTopic = () => {
  const keys = Object.keys(skillsAndTools);

  return (
    <div className="scrollspy-topic">
      <h4 id="scrollspy-skillsAndTools">Skills & Tools</h4>
      <p>Algumas das ferramentas e tecnologias que já utilizei.</p>
      <Container>
        <Row>
          {keys.map((key) => {
            return (
              <Col
                xs={4}
                sm={3}
                md={2}
                key={skillsAndTools[key].name}
                className="p-2"
              >
                <div className="text-center" style={{ fontSize: '4rem' }}>
                  {skillsAndTools[key].icon}
                </div>
                <div className="text-center pt-2">
                  {skillsAndTools[key].label}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SkillsAndToolsTopic;
