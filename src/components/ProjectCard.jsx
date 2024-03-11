import styles from './ProjectCard.module.scss';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import skillsAndTools from '../data/skillsAndTools';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, name }) => {
  const { title, text, tools, linkDeploy, linkRepo, photos, photo } = project;

  const iconsTools = tools.map((key) => {
    return (
      <div key={key} className={styles.iconItem}>
        {skillsAndTools[key].icon}
      </div>
    );
  });

  return (
    <Container className={styles.projectContainer}>
      <h4>{title}</h4>
      <p className="m-0">{text}</p>
      <div className={styles.iconsList}>{iconsTools}</div>
      <div className="mt-2 text-end">
        <Button as={Link} to={`/project/${name}`}>
          Ver mais
        </Button>
      </div>
    </Container>
  );
};

export default ProjectCard;
