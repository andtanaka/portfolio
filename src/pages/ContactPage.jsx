import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './ContactPage.module.scss';
import Form from 'react-bootstrap/Form';
import NavIcons from '../components/NavIcons';
import { useForm } from 'react-hook-form';
import { useSendEmailMutation } from '../store/apis/userApi';
import { ToastContainer, toast } from 'react-toastify';

const ContactPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [sendEmail, { isLoading, error }] = useSendEmailMutation();

  const handleSendMessage = async ({ name, email, message }) => {
    try {
      await sendEmail({ name, email, message }).unwrap();
      toast.success('Mensagem enviada!');
      reset();
    } catch (err) {
      //salvar mensagem localmente
      console.log(err);
      toast.error(
        'Erro ao enviar a mensagem. Tente mais tarde ou entre em contato através das minhas redes sociais.'
      );
    }
  };

  return (
    <>
      <Container>
        <Container className={styles.contactContainer}>
          <Row>
            <Col xs={12} sm={6}>
              <h3>Olá,</h3>
              <p>Gostou do meu portfolio?</p>
              <p>Você pode me contactar através do formulário nesta página.</p>
              <p>
                Também estou disponível através das minhas redes sociais. O
                links estão logo abaixo.
              </p>
              <div className="d-flex justify-content-center pt-3">
                <NavIcons />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <Form onSubmit={handleSubmit(handleSendMessage)}>
                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('name', { required: true })}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name?.type === 'required' && (
                    <small role="alert">Insira seu nome</small>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    {...register('email', { required: true })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email?.type === 'required' && (
                    <small role="alert">Insira seu email</small>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register('message')}
                  />
                </Form.Group>
                <div className="text-end">
                  <Button type="submit">Enviar</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Container>
    </>
  );
};

export default ContactPage;
