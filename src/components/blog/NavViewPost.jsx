import styles from './NavViewPost.module.scss';

const NavViewPost = ({ post }) => {
  const { tags, subtopics } = post;
  return (
    <div className="fix-container">
      <p>Tags</p>
      <ul>
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <p>Navegação</p>
      <ul>
        {subtopics.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavViewPost;
