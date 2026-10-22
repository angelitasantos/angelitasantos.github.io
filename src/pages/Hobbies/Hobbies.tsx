import { useState } from 'react';
import { Link } from 'react-router-dom';
import HobbyCard from '../../components/Hobby/HobbyCard';
import HobbySpotlight from '../../components/Hobby/HobbySpotlight';
import { hobbies } from '../../data/hobbies/hobbies';
import type { Hobby } from '../../types';
import type { HobbyFilter } from '../../constants/hobbies';
import { HOBBIES_PAGE_TITLE, HOBBY_FILTERS } from '../../constants/hobbies';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Hobbies.css';

function Hobbies() {
  useDocumentTitle(HOBBIES_PAGE_TITLE);

  const [selectedFilter, setSelectedFilter] = useState<HobbyFilter>('todos');

  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(
    hobbies[0] ?? null,
  );

  const filteredHobbies = hobbies.filter((hobby) => {
    if (selectedFilter === 'todos') {
      return true;
    }

    return hobby.category === selectedFilter;
  });

  const featuredHobbies = hobbies.filter((hobby) => hobby.featured).length;

  const categories = new Set(
    hobbies.map((hobby) => hobby.category),
  ).size;

  function handleFilterChange(filter: HobbyFilter): void {
    setSelectedFilter(filter);

    const firstHobbyFromFilter = hobbies.find((hobby) => {
      if (filter === 'todos') {
        return true;
      }

      return hobby.category === filter;
    });

    setSelectedHobby(firstHobbyFromFilter ?? null);
  }

  function handleHobbySelection(hobby: Hobby): void {
    setSelectedHobby(hobby);
  }

  return (
    <main className='page hobbies-page'>
      <p className='sr-only' aria-live='polite' role='status'>
        {selectedHobby
          ? `Hobby selecionado: ${selectedHobby.title}.`
          : 'Nenhum hobby selecionado.'}
      </p>

      <header className='page-header hobbies-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span>
          Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Interesses e momentos</p>

        <h1 className='page-title'>
          Coisas que me
          <span className='page-title__accent'>inspiram</span>
        </h1>

        <p className='page-introduction'>
          Um espaço para reunir interesses, atividades e experiências que fazem
          parte do meu cotidiano, da minha criatividade e da minha trajetória de
          aprendizado.
        </p>
      </header>

      <section className='summary-grid' aria-label='Resumo de hobbies'>
        <article className='summary-card'>
          <strong>{hobbies.length}</strong>
          <span>Interesses cadastrados</span>
        </article>

        <article className='summary-card'>
          <strong>{featuredHobbies}</strong>
          <span>Em destaque</span>
        </article>

        <article className='summary-card'>
          <strong>{categories}</strong>
          <span>Categorias exploradas</span>
        </article>
      </section>

      <section
        className='hobbies-filter-area'
        aria-label='Filtros de hobbies'
      >
        <p className='filter-label'>Explorar interesses</p>

        <div className='filter-list'>
          {HOBBY_FILTERS.map((filter) => {
            const isSelected = selectedFilter === filter.value;

            return (
              <button
                key={filter.value}
                className={`filter-button ${
                  isSelected ? 'filter-button-active' : ''
                }`}
                type='button'
                aria-pressed={isSelected}
                onClick={() => handleFilterChange(filter.value)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className='hobbies-explorer' aria-label='Lista de hobbies'>
        {filteredHobbies.length > 0 ? (
          <div className='hobbies-list'>
            {filteredHobbies.map((hobby) => (
              <HobbyCard
                key={hobby.id}
                hobby={hobby}
                isActive={selectedHobby?.id === hobby.id}
                onSelect={handleHobbySelection}
              />
            ))}
          </div>
        ) : (
          <section className='empty-state'>
            <span aria-hidden='true'>✨</span>
            <h2>Nenhum hobby encontrado</h2>
            <p>Escolha outra categoria para explorar seus interesses.</p>
          </section>
        )}

        {selectedHobby && <HobbySpotlight hobby={selectedHobby} />}
      </section>
    </main>
  );
}

export default Hobbies;
