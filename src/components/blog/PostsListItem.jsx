import styles from './PostsListItem.module.scss';

import { Col, Container, Row } from 'react-bootstrap';
import printDate from '../../utils/printDate';
import { Link } from 'react-router-dom';

const PostsListItem = ({ post }) => {
  console.log(printDate(post.postDate));
  return (
    <Container
      as={Link}
      to={`${post.name}`}
      className={styles.postItemContainer}
    >
      <Row>
        <Col
          md={{ span: 3, order: 1 }}
          sm={{ span: 5, order: 1 }}
          xs={{ order: 2, span: 12 }}
          className={styles.postDateContainer}
        >
          <div className={styles.postDate}>{printDate(post.postDate)}</div>
        </Col>
        <Col
          md={{ span: 9, order: 1 }}
          sm={{ span: 7, order: 2 }}
          xs={{ order: 1, span: 12 }}
          className="p-0"
        >
          <div className={styles.postTitle}>{post.title}</div>
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <div className={styles.postSubtitle}>{post.subtitle}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostsListItem;
