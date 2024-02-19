import { BiArrowToTop } from 'react-icons/bi';

const SideButton = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fix-side-bottom">
      <button className="btn btn-bottom" onClick={handleClick}>
        <BiArrowToTop size="1.5rem" />
      </button>
    </div>
  );
};

export default SideButton;
