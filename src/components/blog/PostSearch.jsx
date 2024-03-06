import styles from './PostSearch.module.scss';
import { useForm } from 'react-hook-form';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getSearchUrl } from '../../utils/getSearchUrl';

const PostSearch = ({ url }) => {
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      text: '',
    },
  });
  const navigate = useNavigate();

  const handleSearch = ({ text }) => {
    const search = getSearchUrl({ text });

    navigate(`${url}${search}`);
    reset();
  };

  return (
    <Form className={styles.formSearch} onSubmit={handleSubmit(handleSearch)}>
      <InputGroup className="mb-3">
        <Form.Control type="text" {...register('text')} />
        <Button type="submit">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default PostSearch;
