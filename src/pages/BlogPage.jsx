import styles from './BlogPage.module.scss';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import PostsList from '../components/blog/PostsList';
import TagsSideList from '../components/blog/TagsSideList';
import LastPostsSideList from '../components/blog/LastPostsSideList';
import PostSearch from '../components/blog/PostSearch';

const BlogPage = () => {
  return (
    <Container className="p-0">
      <Row>
        <Col sm={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
          <PostsList />
        </Col>
        <Col md={{ span: 4, order: 2 }} className={styles.sideBar}>
          <PostSearch url="" />
          <TagsSideList />
          <LastPostsSideList />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
