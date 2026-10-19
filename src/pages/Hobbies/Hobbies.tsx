import { useState } from 'react';
import { Link } from 'react-router-dom';
import HobbyCard from '../../components/Hobby/HobbyCard';
import HobbySpotlight from '../../components/Hobby/HobbySpotlight';
import { hobbies } from '../../data/hobbies/hobbies';
import type { Hobby, HobbyCategory } from '../../types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Hobbies.css';

type HobbyFilter = 'todos' | HobbyCategory;

interface FilterOption {
  value: HobbyFilter;
  label: string;
}

const filters: FilterOption[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'criatividade', label: 'Criatividade' },
  { value: 'cultura', label: 'Cultura' },
  { value: 'tecnologia', label: 'Tecnologia' },
  { value: 'bem-estar', label: 'Bem-estar' },
  { value: 'lazer', label: 'Lazer' },
];

function Hobbies() {
  useDocumentTitle('Hobbies | Angelita Santos');

  const [selectedFilter, setSelectedFilter] = useState<HobbyFilter>('todos');
  const [selectedHobby, setSelectedHobby] = useState<Hobby>(hobbies[0]);

  const filteredHobbies = hobbies.filter((hobby) => {
    if (selectedFilter === 'todos') {
      return true;
    }

    return hobby.category === selectedFilter;
  });

  function handleFilterChange(filter: HobbyFilter): void {
    setSelectedFilter(filter);

    const firstHobbyFromFilter = hobbies.find((hobby) => {
      if (filter === 'todos') {
        return true;
      }

      return hobby.category === filter;
    });

    if (firstHobbyFromFilter) {
      setSelectedHobby(firstHobbyFromFilter);
    }
  }

  function handleHobbySelection(hobby: Hobby): void {
    setSelectedHobby(hobby);
  }

  return (
    <main className='hobbies-page'>
      <header className='hobbies-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span>Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Interesses e momentos</p>
        <h1>Coisas que me<span>inspiram</span></h1>

        <p className='hobbies-introduction'>
          Um espaço para reunir interesses, atividades e experiências que fazem
          parte do meu cotidiano, da minha criatividade e da minha trajetória de
          aprendizado.
        </p>
      </header>

      <section className='hobbies-summary' aria-label='Resumo de hobbies'>
        <article className='hobbies-summary-card'>
          <strong>{hobbies.length}</strong>
          <span>Interesses cadastrados</span>
        </article>

        <article className='hobbies-summary-card'>
          <strong>{hobbies.filter((hobby) => hobby.featured).length}</strong>
          <span>Em destaque</span>
        </article>

        <article className='hobbies-summary-card'>
          <strong>{new Set(hobbies.map((hobby) => hobby.category)).size}</strong>
          <span>Categorias exploradas</span>
        </article>
      </section>

      <section className='hobbies-filter-area' aria-label='Filtros de hobbies'>
        <p className='filter-label'>Explorar interesses</p>

        <div className='hobbies-filters'>
          {filters.map((filter) => (
            <button key={filter.value} className={`filter-button ${
                selectedFilter === filter.value ? 'filter-button-active' : ''
              }`}
              type='button' onClick={() => handleFilterChange(filter.value)}>
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className='hobbies-explorer' aria-label='Lista de hobbies'>
        <div className='hobbies-list'>
          {filteredHobbies.map((hobby) => (
            <HobbyCard key={hobby.id} hobby={hobby} isActive={selectedHobby.id === hobby.id} onSelect={handleHobbySelection} />
          ))}
        </div>

        <HobbySpotlight hobby={selectedHobby} />
      </section>
    </main>
  );
}

export default Hobbies;
