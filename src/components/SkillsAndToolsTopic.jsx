import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiSequelize,
  SiTypescript,
} from 'react-icons/si';

const skillsAndTools = [
  {
    name: 'git',
    label: 'Git',
    icon: <FaGitAlt />,
  },
  {
    name: 'github',
    label: 'Github',
    icon: <FaGithub />,
  },
  {
    name: 'javaScript',
    label: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    name: 'typeScript',
    label: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'html',
    label: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'css3',
    label: 'CSS3',
    icon: <FaCss3Alt />,
  },
  {
    name: 'sass',
    label: 'Sass',
    icon: <FaSass />,
  },
  {
    name: 'react',
    label: 'React',
    icon: <FaReact />,
  },

  {
    name: 'redux',
    label: 'Redux',
    icon: <SiRedux />,
  },

  {
    name: 'mySql',
    label: 'MySQL',
    icon: <GrMysql />,
  },
  {
    name: 'sequelize',
    label: 'Sequelize',
    icon: <SiSequelize />,
  },
  {
    name: 'mongoDb',
    label: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    name: 'mongoose',
    label: 'Mongoose',
    icon: <SiMongoose />,
  },
  {
    name: 'nodeJs',
    label: 'NodeJs',
    icon: <FaNodeJs />,
  },
];

const SkillsAndToolsTopic = () => {
  return (
    <div className="scrollspy-topic">
      <h4 id="scrollspy-skillsAndTools">Skills & Tools</h4>
      <Container>
        <Row>
          {skillsAndTools.map((item) => {
            return (
              <Col xs={4} sm={3} md={2} key={item.name} className="p-2">
                <div className="text-center" style={{ fontSize: '4rem' }}>
                  {item.icon}
                </div>
                <div className="text-center pt-2">{item.label}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SkillsAndToolsTopic;
