import { Container } from 'react-bootstrap';
import './ContactPage.scss';

const ContactPage = () => {
  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split('#')[1]
    );
    // console.log(target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Container></Container>
    </>
  );
};

export default ContactPage;
