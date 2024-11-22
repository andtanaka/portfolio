import styles from './ProjectPage.module.scss';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import { Col, Container, Row } from 'react-bootstrap';
import NavIcons from '../components/NavIcons';
import skillsAndTools from '../data/skillsAndTools';
import CarouselImages from '../components/CarouselImages';

const ProjectPage = () => {
  const { name } = useParams();
  const project = projects[name];
  const { title, text, tools, linkDeploy, linkRepo, photos, photo, content } =
    project;

  const iconsTools = tools.map((key) => {
    return (
      <div key={key} className={styles.iconItem}>
        {skillsAndTools[key].icon}
      </div>
    );
  });

  return (
    <div className={styles.projectBox}>
      <div className={styles.titleBox}>
        <h1 className="title text-center">{title}</h1>
        <p className="text-center">{text}</p>
        <div className={styles.iconsList}>{iconsTools}</div>
      </div>
      <div className={styles.carouselBoxDesktop}>
        <CarouselImages photos={photos} display="desktop" />
      </div>
      {content}
      <div className={styles.carouselBoxMobile}>
        <CarouselImages photos={photos} display="mobile" />
      </div>
    </div>
  );
};

export default ProjectPage;
