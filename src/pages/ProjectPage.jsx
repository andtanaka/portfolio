import { useParams } from 'react-router-dom';
import styles from './ProjectPage.module.scss';
import projects from '../data/projects';

const ProjectPage = () => {
  const { name } = useParams();
  const project = projects[name];
  console.log(project);

  return <div>ProjectPage</div>;
};

export default ProjectPage;
