import Loader from '../components/Loader';
import { useGetTagsQuery } from '../store';
import styles from './TagsPage.module.scss';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const TagsPage = () => {
  const { data, isLoading, error } = useGetTagsQuery({ name: '', sort: '' });

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <p>Erro ao carregar post</p>;
  } else {
    content = (
      <ul className={styles.tagsList}>
        {data.tags.map((tag) => (
          <li key={tag._id} className={styles.tagItem}>
            <Link to={`/posts?tag=${tag.name}`} className={styles.tagLink}>
              #{tag.name}
            </Link>{' '}
            - {tag.count} {tag.count > 1 ? 'Posts' : 'Post'}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Container>
      <h4 className="pb-1">Tags</h4>
      {content}
    </Container>
  );
};

export default TagsPage;
