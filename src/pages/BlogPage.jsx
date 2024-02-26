import React from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import ScrollSpy from 'react-ui-scrollspy';
import posts from '../data/posts';
import { FaSearch } from 'react-icons/fa';

const BlogPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
          <p>Posts</p>
          <ScrollSpy
            scrollThrottle={100}
            useBoxMethod={false}
            activeClass="active-scrollspy"
            className="scrollspy-container"
          >
            {posts.map((post) => (
              <Container>
                <Row>
                  <Col sm={{ span: 5, order: 1 }} xs={{ order: 2, span: 12 }}>
                    {post.createAt}
                  </Col>
                  <Col sm={{ span: 7, order: 2 }} xs={{ order: 1, span: 12 }}>
                    {post.title}
                  </Col>
                </Row>
                <Row>
                  <Col>{post.subtitle}</Col>
                </Row>
              </Container>
            ))}
          </ScrollSpy>
        </Col>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 4, order: 2 }}>
          <div className="fix-container">
            <Form>
              <InputGroup className="mb-3">
                <Form.Control aria-label="Text input" />
                <Button variant="outline-secondary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
            <div className="d-sm-block d-none">
              <p>Tags</p>
              <ul>
                <li>posaaskdmasod</li>
                <li>posaaskdmasod</li>
                <li>posaaskdmasod</li>
                <li>posaaskdmasod</li>
              </ul>
            </div>

            <div className="d-sm-block d-none">
              <p>Últimas postagens</p>
              <ul>
                <li>posaaskdmasod</li>
                <li>posaaskdmasod</li>
                <li>posaaskdmasod</li>
                <li>posaaskdmasod</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
