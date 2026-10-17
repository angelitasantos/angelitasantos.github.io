import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/Projects/ProjectCard';
import { projects } from '../../data/projects/projects';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Projects.css';

const ALL_TECHNOLOGIES = 'Todas';
const ITEMS_PER_PAGE = 6;

function Projects() {
  useDocumentTitle('Projetos | Angelita Santos');

  const [selectedTechnology, setSelectedTechnology] = useState<string>(ALL_TECHNOLOGIES);
  const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_PAGE);

  const technologies = useMemo(() => {
    const allTechnologies = projects.flatMap((project) => project.technologies);

    return [
      ALL_TECHNOLOGIES,
      ...Array.from(new Set(allTechnologies)).sort((first, second) =>
        first.localeCompare(second),
      ),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTechnology === ALL_TECHNOLOGIES) {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(selectedTechnology),
    );
  }, [selectedTechnology]);

  const visibleProjects = filteredProjects.slice(0, visibleItems);
  const hasMoreProjects = visibleItems < filteredProjects.length;

  function handleTechnologyChange(technology: string): void {
    setSelectedTechnology(technology);
    setVisibleItems(ITEMS_PER_PAGE);
  }

  function handleLoadMore(): void {
    setVisibleItems((current) => current + ITEMS_PER_PAGE);
  }

  return (
    <main className='projects-page'>
      <header className='projects-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span>
          Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Portfólio técnico</p>

        <h1>
          Meus<span>projetos</span>
        </h1>

        <p className='projects-introduction'>
          Uma seleção de aplicações, estudos e experimentos desenvolvidos ao
          longo da minha trajetória de aprendizado em tecnologia.
        </p>
      </header>

      <section
        className='projects-filter-area'
        aria-label='Filtros de projetos'
      >
        <div>
          <p className='filter-label'>Filtrar por tecnologia</p>

          <div className='technology-filters'>
            {technologies.map((technology) => (
              <button
                key={technology}
                className={`filter-button ${
                  selectedTechnology === technology
                    ? 'filter-button-active'
                    : ''
                }`}
                type='button'
                onClick={() => handleTechnologyChange(technology)}
              >
                {technology}
              </button>
            ))}
          </div>
        </div>

        <p className='projects-counter'>
          {filteredProjects.length}{' '}
          {filteredProjects.length === 1
            ? 'projeto encontrado'
            : 'projetos encontrados'}
        </p>
      </section>

      {filteredProjects.length > 0 ? (
        <>
          <section className='projects-grid' aria-label='Lista de projetos'>
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>

          {hasMoreProjects && (
            <div className='projects-load-more'>
              <button
                className='load-more-button'
                type='button'
                onClick={handleLoadMore}
              >
                Carregar mais projetos
              </button>
            </div>
          )}
        </>
      ) : (
        <section className='empty-projects'>
          <span aria-hidden='true'>🔎</span>
          <h2>Nenhum projeto encontrado</h2>
          <p>Escolha outra tecnologia para visualizar mais projetos.</p>
        </section>
      )}
    </main>
  );
}

export default Projects;
