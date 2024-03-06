import styles from './ViewPost.module.scss';
import parse from 'html-react-parser'; //html to jsx

import { Container } from 'react-bootstrap';
import printDate from '../../utils/printDate';
import { Link } from 'react-router-dom';
import { FaTags } from 'react-icons/fa';

const ViewPost = ({ post }) => {
  const content = post.htmlBody
    ? /<body.*?>([\s\S]*)<\/body>/.exec(post.htmlBody)[1]
    : '';

  return (
    <div>
      <Container className="p-0">
        <p className={styles.postDate}>{printDate(post.postDate)}</p>

        <h3>{post.title}</h3>
        <ul className={styles.tagsList}>
          <li className={styles.tagCell}>
            <FaTags />
          </li>
          {post.tags.map((tag) => (
            <li key={tag._id} className={styles.tagCell}>
              <Link to={`/posts/?tag=${tag.name}`} className={styles.tagIcon}>
                #{tag.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="render-content">{parse(content)}</div>
      </Container>
    </div>
  );
};

export default ViewPost;
