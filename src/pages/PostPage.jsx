import React from 'react';
import ViewPost from '../components/ViewPost';
import posts from '../data/posts';
import { Container, Row, Col } from 'react-bootstrap';
import NavViewPost from '../components/NavViewPost';

const PostPage = () => {
  const post = posts[0];
  return (
    <Container>
      <Row>
        <Col xs={12} sm={8}>
          <ViewPost post={post} />
        </Col>
        <Col xs={12} sm={4}>
          <NavViewPost post={post} />
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;
