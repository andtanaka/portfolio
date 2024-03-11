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

const skillsAndTools = {
  git: {
    label: 'Git',
    icon: <FaGitAlt />,
  },
  javaScript: {
    label: 'JavaScript',
    icon: <SiJavascript />,
  },

  typeScript: {
    label: 'TypeScript',
    icon: <SiTypescript />,
  },

  html: {
    label: 'HTML',
    icon: <FaHtml5 />,
  },
  css3: {
    label: 'CSS3',
    icon: <FaCss3Alt />,
  },
  sass: {
    label: 'Sass',
    icon: <FaSass />,
  },
  react: {
    label: 'React',
    icon: <FaReact />,
  },
  redux: {
    label: 'Redux',
    icon: <SiRedux />,
  },
  mySql: {
    label: 'MySQL',
    icon: <GrMysql />,
  },
  sequelize: {
    label: 'Sequelize',
    icon: <SiSequelize />,
  },

  mongoDb: {
    label: 'MongoDB',
    icon: <SiMongodb />,
  },
  mongoose: {
    label: 'Mongoose',
    icon: <SiMongoose />,
  },

  nodeJs: {
    label: 'NodeJs',
    icon: <FaNodeJs />,
  },
};

export default skillsAndTools;
