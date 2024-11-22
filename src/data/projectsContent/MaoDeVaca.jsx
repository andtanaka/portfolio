import styles from './ProjectsContent.module.scss';
import { FaBarcode } from 'react-icons/fa6';
import { MdLocalGroceryStore } from 'react-icons/md';
import { FaSortAmountDown } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { LiaListAltSolid } from 'react-icons/lia';
import { FaRegEdit } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GrUserAdmin } from 'react-icons/gr';
import { Container, Row } from 'react-bootstrap';

const userFeatures = [
  {
    icon: <FaBarcode />,
    text: 'Consulta do código de barras dos produtos listados na plataforma.',
  },
  {
    icon: <MdLocalGroceryStore />,
    text: 'Cadastre os mercados que você frequenta.',
  },
  {
    icon: <LiaListAltSolid />,
    text: 'Crie listas de compras e já organize em quais mercados você irá comprar cada item.',
  },
  {
    icon: <FaSortAmountDown />,
    text: 'Filtre sua lista de compras por mercado para auxiliar nas suas compras.',
  },
  {
    icon: <GrContact />,
    text: 'Faltou algum produto? Mande uma mensagem pra gente com os produtos faltantes.',
  },
];

const userAdminFeatures = [
  {
    icon: <FaRegEdit />,
    text: 'Cadastre, edite e exclua produtos que serão atualizados no banco de dados. Assim, todos os usuários terão acesso aos dados atualizados.',
  },
  {
    icon: <FiUsers />,
    text: 'Monitore quantos usuários estão cadastrados na plataforma.',
  },
  {
    icon: <GrUserAdmin />,
    text: 'Altere o nível de acesso aos dados da plataforma disponíveis ao usuário.',
  },
];

const MaoDeVaca = () => {
  return (
    <Container className={styles.projectContainer}>
      <Row className={styles.topicBox}>
        <h4>O que é o Mão de Vaca?</h4>
        <p>
          O Mão de Vaca é o app que te ajuda a encontrar os melhores preços ao
          consultar no Menor Preço do Nota Paraná. Além disso, ele facilita a
          criação da sua lista de compras, tornando tudo mais prático e
          econômico.
        </p>
        <p>
          Veja{' '}
          <a href="https://maodevaca-two.vercel.app/comousar">
            como usar o App. Organize-se e economize com o Mão de Vaca!
          </a>
        </p>
      </Row>

      <Row className={styles.topicBox}>
        {/* features */}
        <h4>Funcionalidades ao user</h4>
        <p>
          No App Mão de Vaca, as funcionalidades ao user estão disponíveis assim
          que você se cadastra na plataforma.{' '}
          <a href="https://maodevaca-two.vercel.app/">
            Confira o App agora mesmo.
          </a>
        </p>
        <p>O que você pode encontrar no App:</p>
        <ul className={styles.featuresBox}>
          {userFeatures.map((f) => {
            return (
              <li className={styles.featureBox} key={f.text}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureText}>{f.text}</div>
              </li>
            );
          })}
        </ul>
      </Row>

      <Row className={styles.topicBox}>
        <h4>Interface amigável para o Administrador</h4>
        <p>
          O site Mão de Vaca possui fucionalidades diferenciadas para facilitar
          que o administrador do site possa incluir, editar ou excluir os
          produtos disponíveis para os usuários.
        </p>
        <p>Seguem algumas features criadas para o usuário administrador:</p>
        <ul className={styles.featuresBox}>
          {userAdminFeatures.map((f) => {
            return (
              <li className={styles.featureBox} key={f.text}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureText}>{f.text}</div>
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
};

export default MaoDeVaca;
