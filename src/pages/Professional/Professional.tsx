import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfessionalTimelineItem from '../../components/Professional/ProfessionalTimelineItem';
import { professionalPublic } from '../../data/professionalPublic/professionalPublic';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Professional.css';

const ITEMS_PER_PAGE = 2;

const highlights = [
  {
    icon: '📊',
    title: 'Gestão e planejamento',
    description: 'Organização de processos, acompanhamento de indicadores e suporte para decisões.',
  },
  {
    icon: '💰',
    title: 'Custos e finanças',
    description: 'Experiência com controles, análise de custos, relatórios e acompanhamento financeiro.',
  },
  {
    icon: '💻',
    title: 'Tecnologia',
    description: 'Estudos e projetos em desenvolvimento web e mobile, dados, React, TypeScript, Java e Python.',
  },
];

function Professional() {
  useDocumentTitle('Profissional | Angelita Santos');

  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const visibleExperiences = professionalPublic.slice(0, visibleItems);
  const hasMoreExperiences = visibleItems < professionalPublic.length;

  function handleLoadMore(): void {
    setVisibleItems((current) => current + ITEMS_PER_PAGE);
  }

  return (
    <main className='professional-page'>
      <header className='professional-header'>
        <Link className='back-link' to='/'><span aria-hidden='true'>←</span>Voltar ao início</Link>
        <p className='hero-eyebrow'>Trajetória profissional</p>

        <h1>Experiência<span>profissional</span></h1>

        <p className='professional-introduction'>
          Minha trajetória combina experiência em administração, custos,
          planejamento, finanças e uma formação contínua em tecnologia. Esta
          página apresenta um resumo público da minha atuação.
        </p>
      </header>

      <section className='professional-highlights' aria-label='Áreas de atuação'>
        {highlights.map((highlight) => (
          <article key={highlight.title} className='professional-highlight-card'>
            <span className='professional-highlight-icon' aria-hidden='true'>{highlight.icon}</span>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      <section className='professional-timeline-section'>
        <div className='professional-section-heading'>
          <div>
            <p className='hero-eyebrow'>Resumo público</p>
            <h2>Trajetória em evolução</h2>
          </div>

          <p>Exibindo {visibleExperiences.length} de {professionalPublic.length}{' '} experiências e etapas profissionais.</p>
        </div>

        <div className='professional-timeline' aria-label='Linha do tempo profissional'>
          {visibleExperiences.map((experience) => (<ProfessionalTimelineItem key={experience.id} experience={experience} />))}
        </div>

        {hasMoreExperiences && (
          <div className='professional-load-more'>
            <button className='load-more-button' type='button' onClick={handleLoadMore}>Carregar mais experiências</button>
          </div>
        )}
      </section>

      <section className='professional-access-card'>
        <div>
          <p className='hero-eyebrow'>Área demonstrativa</p>

          <h2>Informações profissionais adicionais</h2>

          <p>
            Algumas informações complementares podem ser visualizadas em uma
            área de acesso demonstrativo. Nenhum dado sensível será publicado ou
            armazenado no site.
          </p>
        </div>

        <Link className='primary-button' to='/profissional/acesso'>
          Acessar área detalhada<span aria-hidden='true'>→</span>
        </Link>
      </section>
    </main>
  );
}

export default Professional;
