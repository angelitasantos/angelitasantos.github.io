import { useState } from 'react';
import { Link } from 'react-router-dom';
import EducationTimelineItem from '../../components/Education/EducationTimelineItem';
import { education } from '../../data/education/education';
import type { EducationLevel } from '../../types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Education.css';

type EducationFilter = 'todos' | EducationLevel;

interface FilterOption {
  value: EducationFilter;
  label: string;
}

const filters: FilterOption[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'tecnico', label: 'Técnico' },
  { value: 'graduacao', label: 'Graduação' },
  { value: 'pos-graduacao', label: 'Pós-graduação' },
  { value: 'curso', label: 'Cursos' },
  { value: 'certificacao', label: 'Certificações' },
  { value: 'workshop', label: 'Workshops' },
];

function Education() {
  useDocumentTitle('Educação | Angelita Santos');

  const [selectedFilter, setSelectedFilter] = useState<EducationFilter>('todos');

  const filteredEducation = education.filter((item) => {
    if (selectedFilter === 'todos') {
      return true;
    }

    return item.level === selectedFilter;
  });

  const completedCount = education.filter((item) => item.status === 'concluido').length;
  const inProgressCount = education.filter((item) => item.status === 'em-andamento').length;

  return (
    <main className='education-page'>
      <header className='education-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span>
          Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Trajetória de aprendizado</p>

        <h1>
          Experiência
          <span>acadêmica</span>
        </h1>

        <p className='education-introduction'>
          Minha trajetória reúne formação em administração, gestão de projetos e
          estudos contínuos em tecnologia, desenvolvimento de sistemas e análise
          de dados.
        </p>
      </header>

      <section className='education-summary' aria-label='Resumo acadêmico'>
        <div className='education-summary-card'>
          <strong>{education.length}</strong>
          <span>Formações e cursos</span>
        </div>

        <div className='education-summary-card'>
          <strong>{completedCount}</strong>
          <span>Concluídos</span>
        </div>

        <div className='education-summary-card'>
          <strong>{inProgressCount}</strong>
          <span>Em andamento</span>
        </div>
      </section>

      <section
        className='education-filter-area'
        aria-label='Filtros acadêmicos'
      >
        <p className='filter-label'>Filtrar por categoria</p>

        <div className='education-filters'>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-button ${
                selectedFilter === filter.value ? 'filter-button-active' : ''
              }`}
              type='button'
              onClick={() => setSelectedFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
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
