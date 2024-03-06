import styles from './TagsSideList.module.scss';
import { useGetTagsQuery } from '../../store';
import Loader from '../Loader';
import { Link } from 'react-router-dom';

const TagsSideList = () => {
  const { data, isLoading, error } = useGetTagsQuery({
    name: '',
    sort: '',
  });
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    console.log(error.data.message);
    content = <div>Erro ao ler as tags.</div>;
  } else {
    if (data.tags.length === 0) {
      content = <p className="pt-3">Nenhuma tag cadastrada.</p>;
    } else {
      content = (
        <div className="d-sm-block d-none">
          <h5>Tags</h5>
          <ul className={styles.tagsList}>
            {data.tags.map((tag) => (
              <li key={tag._id} className={styles.tagCell}>
                <Link to={`?tag=${tag.name}`} className={styles.tagIcon}>
                  {tag.name}
                </Link>
              </li>
            ))}
            <li className={styles.tagCell}>
              <Link to={`/posts/tags`} className={styles.tagIcon}>
                &#8230;
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return <>{content}</>;
};

export default TagsSideList;
