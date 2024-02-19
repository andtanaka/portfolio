import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import CarouselImages from './CarouselImages';

const ProjectCard = ({
  title,
  tools,
  linkDeploy,
  linkRepo,
  photos,
  children,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h3>{title}</h3>
            <p>{children}</p>
          </div>
          <div>
            {tools.map((tool) => {
              return <div>{tool.icon}</div>;
            })}
          </div>
          <div>
            <Button as="a" href={linkDeploy}>
              Demo
            </Button>
            <Button as="a" href={linkRepo}>
              Github
            </Button>
          </div>
        </Col>
        <Col>
          <CarouselImages photos={photos} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectCard;
