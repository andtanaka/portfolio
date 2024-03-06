import styles from './LastPostsSideList.module.scss';
import { useGetSomePostsQuery } from '../../store/apis/postsApi';
import Loader from '../Loader';
import { Link } from 'react-router-dom';
import printDate from '../../utils/printDate';

const LastPostsSideList = () => {
  const { data, isLoading, error } = useGetSomePostsQuery();
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    console.log(error.data.message);
    content = <div>Erro ao ler os posts.</div>;
  } else {
    if (data.posts.length === 0) {
      content = <p className="pt-3">Nenhum post cadastrado</p>;
    } else {
      content = (
        <div className="d-sm-block d-none">
          <h5>Últimas postagens</h5>
          <ul className={styles.postsList}>
            {data.posts.map((post) => (
              <li key={post._id} className={styles.postItem}>
                <Link to={`${post.name}`} className={styles.itemName}>
                  {post.title}
                </Link>
                <p className={styles.itemDate}>{printDate(post.postDate)}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return <>{content}</>;
};

export default LastPostsSideList;
