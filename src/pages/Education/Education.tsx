import { useState } from 'react';
import { Link } from 'react-router-dom';
import EducationTimelineItem from '../../components/Education/EducationTimelineItem';
import { EDUCATION_FILTERS, EDUCATION_PAGE_TITLE } from '../../constants';
import { education } from '../../data/education/education';
import type { EducationLevel } from '../../types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Education.css';

type EducationFilter = 'todos' | EducationLevel;

function Education() {
  useDocumentTitle(EDUCATION_PAGE_TITLE);

  const [selectedFilter, setSelectedFilter] = useState<EducationFilter>('todos');

  const filteredEducation = education.filter((item) => {
    if (selectedFilter === 'todos') {
      return true;
    }

    return item.level === selectedFilter;
  });

  const completedCount = education.filter(
    (item) => item.status === 'concluido',
  ).length;

  const inProgressCount = education.filter(
    (item) => item.status === 'em-andamento',
  ).length;

  return (
    <main className='page education-page'>
      <p className='sr-only' aria-live='polite' role='status'>
        {filteredEducation.length} item
        {filteredEducation.length === 1 ? '' : 's'} encontrado
        {filteredEducation.length === 1 ? '' : 's'}.
      </p>

      <header className='page-header education-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span>
          Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Trajetória de aprendizado</p>

        <h1 className='page-title'>
          Experiência
          <span className='page-title__accent'>acadêmica</span>
        </h1>

        <p className='page-introduction'>
          Minha trajetória reúne formação em administração, gestão de projetos e
          estudos contínuos em tecnologia, desenvolvimento de sistemas e análise
          de dados.
        </p>
      </header>

      <section className='summary-grid' aria-label='Resumo acadêmico'>
        <div className='summary-card'>
          <strong>{education.length}</strong>
          <span>Formações e cursos</span>
        </div>

        <div className='summary-card'>
          <strong>{completedCount}</strong>
          <span>Concluídos</span>
        </div>

        <div className='summary-card'>
          <strong>{inProgressCount}</strong>
          <span>Em andamento</span>
        </div>
      </section>

      <section
        className='education-filter-area'
        aria-label='Filtros acadêmicos'
      >
        <p className='filter-label'>Filtrar por categoria</p>

        <div className='filter-list'>
          {EDUCATION_FILTERS.map((filter) => {
            const isSelected = selectedFilter === filter.value;

            return (
              <button
                key={filter.value}
                className={`filter-button ${
                  isSelected ? 'filter-button-active' : ''
                }`}
                type='button'
                aria-pressed={isSelected}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {filteredEducation.length > 0 ? (
        <section
          className='education-timeline'
          aria-label='Linha do tempo acadêmica'
        >
          {filteredEducation.map((item) => (
            <EducationTimelineItem key={item.id} education={item} />
          ))}
        </section>
      ) : (
        <section className='empty-projects'>
          <span aria-hidden='true'>🎓</span>
          <h2>Nenhuma formação encontrada</h2>
          <p>Escolha outra categoria para visualizar os itens disponíveis.</p>
        </section>
      )}
    </main>
  );
}

export default Education;
