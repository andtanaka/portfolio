import styles from './ViewPost.module.scss';
import parse from 'html-react-parser'; //html to jsx

import { Container } from 'react-bootstrap';

const ViewPost = ({ post }) => {
  const content = post.htmlBody
    ? /<body.*?>([\s\S]*)<\/body>/.exec(post.htmlBody)[1]
    : '';

  return (
    <div>
      <Container fluid className="render-container">
        <h3>{post.title}</h3>
        <div className="render-content">{parse(content)}</div>
      </Container>
    </div>
  );
};

export default ViewPost;
