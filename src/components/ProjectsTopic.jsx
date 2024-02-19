import React from 'react';
import ProjectCard from './ProjectCard';

const maodevacaPhotos = [
  {
    name: 'maodevaca-1',
    src: './assets/maodevacaPage-1.png',
    title: 'Tela de produtos',
    description:
      'Visualize os detalhes do produto, auxiliado por ferramentas de busca. Adicione produtos na sua lista de compras.',
  },
  {
    name: 'maodevaca-2',
    src: './assets/maodevacaPage-2.png',
    title: 'Tela de mercados',
    description: 'Adicione os mercados que você frequenta.',
  },
  {
    name: 'maodevaca-3',
    src: './assets/maodevacaPage-3.png',
    title: 'Tela das minhas listas de compras',
    description: 'Gerencie suas listas de compras.',
  },
  {
    name: 'maodevaca-4',
    src: './assets/maodevacaPage-4.png',
    title: 'Tela da lista de compras',
    description: 'Gerencie os produtos contidos na sua lista de compras.',
  },
];

const ProjectsTopic = () => {
  return (
    <div className="scrollspy-topic">
      <h4 id="scrollspy-projects">Projects</h4>

      <ProjectCard
        title="Mão de vaca"
        tools={[]}
        linkDeploy="https://maodevaca-two.vercel.app/"
        linkRepo="/"
        photos={maodevacaPhotos}
      >
        Facilite suas consultas no Menor Preço com o App Mão de vaca.
      </ProjectCard>
    </div>
  );
};

export default ProjectsTopic;
