import styles from './LastPostsSideList.module.scss';
import { useGetSomePostsQuery } from '../../store/apis/postsApi';
import Loader from '../Loader';

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
          <ul>
            {data.posts.map((post) => (
              <li key={post._id}>{post.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return <>{content}</>;
};

export default LastPostsSideList;
