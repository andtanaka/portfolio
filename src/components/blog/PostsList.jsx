import styles from './PostsList.module.scss';
import ScrollSpy from 'react-ui-scrollspy';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { useGetPostsQuery } from '../../store/apis/postsApi';
import PostsListItem from './PostsListItem';
import Loader from '../Loader';

const PostsList = () => {
  const query = useQuery();
  const { pageNumber } = useParams() || 1;
  const text = query.get('text') || '';
  const sort = query.get('sort') || '';
  const tag = query.get('tag') || '';

  let content = <></>;
  const { data, isLoading, error } = useGetPostsQuery({
    text,
    tag,
    sort,
    pageNumber,
  });

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    console.log(error.data.message);
    content = <p>Erro ao ler os posts.</p>;
  } else {
    if (data.posts.length === 0) {
      content = <p className="pt-3">Nenhum post cadastrado</p>;
    } else {
      content = data.posts.map((post) => (
        <PostsListItem key={post._id} post={post} />
      ));
    }
  }
  return (
    <Container className={styles.postsListContainer}>
      <h4 className="pb-1">Posts</h4>
      {content}
    </Container>
  );
};

export default PostsList;
