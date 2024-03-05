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
          <ul>
            {data.tags.map((tag) => (
              <li key={tag._id}>
                <Link to={`?tag=${tag.name}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return <>{content}</>;
};

export default TagsSideList;
