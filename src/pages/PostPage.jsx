import styles from './PostPage.module.scss';
import posts from '../data/posts';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Nav,
  NavLink,
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import { useGetPostByNameQuery } from '../store/index.js';
import Loader from '../components/Loader.jsx';
import ScrollSpy from 'react-ui-scrollspy';
import ViewPost from '../components/blog/ViewPost.jsx';
import NavViewPost from '../components/blog/NavViewPost.jsx';

const PostPage = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useGetPostByNameQuery(name);
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <p>Erro ao carregar post</p>;
  } else {
    content = (
      <Row className="mt-3">
        <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
          <ScrollSpy
            scrollThrottle={100}
            useBoxMethod={false}
            activeClass="active-scrollspy"
            className={styles.scrollspyContainer}
          >
            <ViewPost post={data.post} />
          </ScrollSpy>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
          <div className={styles.fixContainer}>
            <div className="d-md-block d-none">
              <h5>Conteúdo do post:</h5>
              <ul className={styles.subtopicsList}>
                {data.post.subtopics.map((topic) => (
                  <Nav.Item as="li" key={topic.htmlId}>
                    <NavLink
                      as="a"
                      href={`#${topic.htmlId}`}
                      data-to-scrollspy-id={topic.htmlId}
                    >
                      # {topic.name}
                    </NavLink>
                  </Nav.Item>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    );
  }

  return <Container>{content}</Container>;
};

export default PostPage;
