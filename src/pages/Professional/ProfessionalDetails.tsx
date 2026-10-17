import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { professionalDetails } from '../../data/professionalDetails/professionalDetails';
import ProfessionalTimelineItem from '../../components/Professional/ProfessionalTimelineItem';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Professional.css';

const ITEMS_PER_PAGE = 2;

function ProfessionalDetails() {
  useDocumentTitle('Profissional Detalhes | Angelita Santos');

  const navigate = useNavigate();
  const { session, logout } = useAuth();
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const technologies = new Set(
    professionalDetails.flatMap((experience) => experience.technologies ?? []),
  );

  const visibleExperiences = professionalDetails.slice(0, visibleItems);
  const hasMoreExperiences = visibleItems < professionalDetails.length;

  function handleLogout(): void {
    logout();
    navigate('/profissional');
  }

  function handleLoadMore(): void {
    setVisibleItems((current) => current + ITEMS_PER_PAGE);
  }

  return (
    <main className='professional-details-page'>
      <header className='professional-details-header'>
        <div>
          <p className='hero-eyebrow'>Área demonstrativa liberada</p>

          <h1>Informações<span>adicionais</span></h1>

          <p>Olá, <strong>{session?.username}</strong>. Esta área apresenta detalhes complementares organizados para demonstração.</p>
        </div>

        <button className='logout-button' type='button' onClick={handleLogout}>Sair<span aria-hidden='true'>↗</span></button>
      </header>

      <section className='professional-details-summary' aria-label='Resumo da área profissional'>
        <article className='professional-details-summary-card'>
          <strong>{professionalDetails.length}</strong>
          <span>Áreas detalhadas</span>
        </article>

        <article className='professional-details-summary-card'>
          <strong>{technologies.size}</strong>
          <span>Ferramentas e tecnologias</span>
        </article>

        <article className='professional-details-summary-card'>
          <strong>100%</strong>
          <span>Dados demonstrativos</span>
        </article>
      </section>

      <section className='professional-details-note'>
        <span aria-hidden='true'>ℹ️</span>

        <p>
          Esta área foi criada para simular uma jornada de acesso. O conteúdo
          publicado deve sempre permanecer não confidencial.
        </p>
      </section>

      <section className='professional-timeline' aria-label='Detalhes da trajetória profissional'>
        {visibleExperiences.map((experience) => (
          <ProfessionalTimelineItem key={experience.id} experience={experience} />
        ))}
      </section>

      {hasMoreExperiences && (
        <div className='professional-load-more'>
          <button className='load-more-button' type='button' onClick={handleLoadMore}>Carregar mais experiências</button>
        </div>
      )}
    </main>
  );
}

export default ProfessionalDetails;
